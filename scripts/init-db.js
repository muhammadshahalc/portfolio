import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('❌ Error: DATABASE_URL environment variable is missing in .env file.');
  process.exit(1);
}

// Remove any trailing sslmode query parameters that force strict CA verification in pg-connection-string
const cleanConnectionString = connectionString.replace(/([?&])sslmode=[^&]*/g, '');

const client = new pg.Client({
  connectionString: cleanConnectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function initDB() {
  try {
    console.log('🔄 Connecting to PostgreSQL database...');
    await client.connect();

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(200) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        is_read BOOLEAN DEFAULT FALSE
      );
    `;

    console.log('🔄 Creating "messages" table if not exists...');
    await client.query(createTableQuery);

    console.log('✅ Success: "messages" table created/verified successfully!');
  } catch (error) {
    console.error('❌ Error initializing database:', error.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

initDB();
