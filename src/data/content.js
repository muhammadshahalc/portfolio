// =========================================================================
// ALL YOUR PORTFOLIO CONTENT LIVES HERE.
// Edit this file to update text, projects, skills, links etc.
// =========================================================================

export const personal = {
  name: "Muhammad Shahal",
  logoFirst: "Shahal",         // logo text, first part (styled plain)
  logoSecond: ".ai",           // logo text, second part (styled with accent color)
  roles: [
    "Muhammad Shahal",
    "Full-Stack AI/ML Engineer",
    "Data Scientist",
    "GenAI & LLM Systems Developer",
    "Agentic AI & RAG Specialist",
  ],
  heroSubtitle:
    "Full-stack AI/ML Engineer specializing in production-grade GenAI, LLM applications, RAG pipelines, and multi-agent systems. I build reliable, scalable end-to-end AI software — from vector architecture to cloud deployment.",
  location: "Kerala, India — Open to Relocation",
  email: "shahalhere@gmail.com",
  phone: "+91 9061288883",
  resumeUrl: "/shahal_resume.pdf",
  social: {
    github: "https://github.com/muhammadshahalc",
    linkedin: "https://linkedin.com/in/muhammad-shahal-c",
    twitter: "",   // leave blank string to hide icon
  },
};

export const about = {
  paragraphs: [
    "I'm a Full-stack AI/ML Engineer focused on turning Large Language Models (LLMs) and Generative AI into robust, production-ready systems. My expertise centers on Retrieval-Augmented Generation (RAG) pipelines, multi-agent orchestration, schema-validated automated extraction, and scalable backend integrations.",
    "I work across the full stack of modern LLM and AI engineering: building multi-agent workflows with LangGraph and LangChain, architecting hybrid vector search systems (Pinecone, FAISS, ChromaDB, OpenSearch), building high-performance FastAPI & React applications, and deploying containerized cloud solutions on AWS & Docker.",
  ],
  yearsLabel: "AI/ML",       // shown in the "experience badge" circle
  yearsSubLabel: "Engineer",
  skills: [
    // GenAI / LLM
    "Python",
    "SQL",
    "LangGraph",
    "LangChain",
    "RAG & Hybrid Search",
    "Agentic AI",
    "Prompt Engineering",

    // Backend & Frontend
    "FastAPI & Flask",
    "React",

    // Data & Vector Stores
    "NoSQL",
    "Vector Databases",

    // Cloud & MLOps
    "AWS",
    "Docker & CI/CD",
    "MLflow",

    // ML / Model Training
    "PyTorch & Scikit-learn",
    "Hugging Face Transformers",
    "PEFT / LoRA / QLoRA",
  ],
};

export const skillCategories = [
  {
    title: "Generative AI & LLMs",
    skills: ["LangChain", "LangGraph", "RAG", "Agentic AI", "Prompt Engineering", "OpenAI SDK", "LLaMA 3", "Pinecone", "FAISS", "ChromaDB", "OpenSearch", "Embeddings", "Hybrid & BM25 Search"],
  },
  {
    title: "Backend & Frontend",
    skills: ["Python", "SQL (PostgreSQL / MySQL)", "FastAPI", "Flask", "React", "RESTful APIs", "DynamoDB", "AWS S3", "System Design"],
  },
  {
    title: "Machine Learning & MLOps",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Hugging Face", "NLP", "PEFT / LoRA / QLoRA", "AWS", "Docker", "GitHub Actions CI/CD", "MLflow", "DVC", "Airflow"],
  },
];

export const experiences = [
  {
    period: "2026",
    role: "Generative AI Engineer",
    company: "Sustainability Economics.ai",
    location: "Karnataka, India",
    description: [
        "Built an LLM-driven Grid Tariff Data Automation platform extracting and standardizing electricity tariff data from utility PDFs and websites across countries (AWS S3, DynamoDB), with automated LLM extraction, evaluation, and Pydantic schema validation — including country-specific mapping and unit conversion — cutting manual effort by ~80%.",
        "Fine-tuned a Gemma 3 4B model using Unsloth on domain-specific electricity tariff data to improve structured tariff extraction and enable efficient, cost-effective inference for product development.",
    ],
  },
  {
    period: "2025 - 2026",
    role: "AI Developer & Data Scientist",
    company: "Cybpress Innovative Solutions",
    location: "Kerala, India",
    description: [
      "Built and deployed agentic AI systems using LangChain and LangGraph enabling multi-step reasoning, tool calling, persistent conversational memory, and production deployment.",
      "Engineered Retrieval-Augmented Generation (RAG) and hybrid search pipelines on OpenSearch/FAISS (BM25 + vector retrieval with reranking), containerized with Docker and optimized for high-performance inference.",
    ],
  },
  {
    period: "2024 - 2025",
    role: "Data Science Intern",
    company: "Luminar Technolab",
    location: "Kerala, India",
    description: [
      "Built end-to-end machine learning pipelines with automated CI/CD via GitHub Actions, supporting model training, evaluation, and deployment workflows.",
      "Developed NLP semantic-similarity models for classification and retrieval (~25% accuracy gain), and delivered Power BI/Tableau dashboards cutting manual reporting by ~50%.",
    ],
  },
];

export const education = {
  degree: "B.Tech in Artificial Intelligence and Machine Learning",
  institution: "Hindusthan College of Engineering and Technology",
  period: "2020 - 2024",
  certifications: [
    "IBM Industry Certification Program",
    "Data Science Certification (NACTET)",
    "Learnathon ICT Certification",
  ],
};

export const services = [
  {
    icon: "FaBrain",
    title: "RAG & Search Pipelines",
    description:
      "Designing and building production retrieval-augmented generation systems — chunking strategy, embedding selection, hybrid search (BM25 + vector), and re-ranking for accurate grounded responses.",
  },
  {
    icon: "FaRobot",
    title: "Multi-Agent Systems",
    description:
      "Building orchestrated agent workflows with LangGraph and LangChain, enabling multi-step reasoning, tool integration, and thread-isolated persistent state management.",
  },
  {
    icon: "FaServer",
    title: "Full-Stack AI Backend & APIs",
    description:
      "Developing high-performance FastAPI/Flask microservices with PostgreSQL, DynamoDB, Redis, and React frontends integrated via streaming REST/WebSocket APIs.",
  },
  {
    icon: "FaDatabase",
    title: "Vector Database Architecture",
    description:
      "Architecting and tuning scalable vector search solutions across Pinecone, FAISS, ChromaDB, and OpenSearch optimized for low-latency retrieval.",
  },
  {
    icon: "FaSlidersH",
    title: "Model Fine-Tuning & NLP",
    description:
      "Fine-tuning open models (LLaMA, Hugging Face) using PEFT, LoRA, and QLoRA for targeted domain-specific task accuracy and efficient inference.",
  },
  {
    icon: "FaCogs",
    title: "Cloud & MLOps Deployment",
    description:
      "Containerizing AI pipelines with Docker, deploying on AWS, and setting up automated CI/CD workflows (GitHub Actions) for reliable production systems.",
  },
];

export const projects = [
  {
    id: 1,
    icon: "FaComments",
    name: "Multi-Agent Legal Reasoning System",
    tech: "LangGraph, FastAPI, ChromaDB, Postgres",
    category: "ai",
    description:
      "Architected a constraint-driven BNS-aligned legal reasoning system with persistent memory, checkpointed execution, token streaming, and thread-isolated vector stores to prevent IPC/BNS statutory mixing.",
    link: "https://www.linkedin.com/posts/muhammad-shahal-c_multi-agent-stateful-legal-reasoning-system-ugcPost-7417513881150967808-dolN/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ6LmwBS_KsJfz1SMqvOaAkwIC5eAl7xJI",
  },
  {
    id: 2,
    icon: "FaSearch",
    name: "AI RAG MedBot — Healthcare Assistant",
    tech: "LangChain, Groq LLaMA-3, Pinecone, Streamlit",
    category: "ai",
    description:
      "Built a RAG medical assistant for precise Q&A over hospital CSVs and PDFs with Hugging Face embeddings, improving response relevance by ~30% in a reusable Flask+Streamlit pipeline.",
    link: "https://www.linkedin.com/posts/muhammad-shahal-c_ai-healthcare-chatbot-ugcPost-7363614339037081600-OoDG/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ6LmwBS_KsJfz1SMqvOaAkwIC5eAl7xJI",
  },
  {
    id: 3,
    icon: "FaLayerGroup",
    name: "Resume Matcher Pro",
    tech: "FastAPI, React, PostgreSQL, NLP Scoring",
    category: "fullstack",
    description:
      "Developed a full-stack parsing and assessment system extracting key candidate data with NLP-backed job alignment scoring algorithms for instant insights.",
    link: "https://github.com/muhammadshahalc/resume-parser-ai",
  },
  {
    id: 4,
    icon: "FaSlidersH",
    name: "LLM Grid Tariff Data Automation",
    tech: "AWS S3, DynamoDB, Pydantic, LLM Extraction",
    category: "ai",
    description:
      "Automated extraction and standardization platform processing electricity tariff utility PDFs across countries, reducing manual extraction effort by ~80%.",
    link: "https://github.com/muhammadshahalc",
  },
];

export const filters = [
  { label: "All", value: "all" },
  { label: "AI / GenAI", value: "ai" },
  { label: "Full-Stack", value: "fullstack" },
];

export const testimonials = [];

export const footer = {
  tagline:
    "Building production-grade AI & GenAI systems — RAG pipelines, agentic AI, and scalable full-stack applications.",
  copyrightName: "Muhammad Shahal",
};
