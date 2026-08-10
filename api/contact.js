import pg from 'pg';

// Create a connection pool for serverless execution
let pool;

function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is missing');
    }
    
    const cleanConnectionString = connectionString.replace(/([?&])sslmode=[^&]*/g, '');
    
    pool = new pg.Pool({
      connectionString: cleanConnectionString,
      ssl: {
        rejectUnauthorized: false,
      },
      max: 5, // Serverless friendly connection limit
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });
  }
  return pool;
}

export default async function handler(req, res) {
  // Set CORS headers if needed
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields (name, email, subject, message) are required.' });
    }

    const clientPool = getPool();
    const query = `
      INSERT INTO messages (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING id, created_at;
    `;
    const values = [name.trim(), email.trim(), subject.trim(), message.trim()];

    const result = await clientPool.query(query, values);

    return res.status(200).json({
      success: true,
      message: 'Message sent and stored successfully!',
      data: {
        id: result.rows[0].id,
        created_at: result.rows[0].created_at,
      },
    });
  } catch (error) {
    console.error('API /contact error:', error);
    return res.status(500).json({
      error: 'Failed to process message.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
