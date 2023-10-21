import { Pool } from 'pg';
import { config } from 'dotenv';
config();

const pool = new Pool({
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  database: process.env.DATABASE_URL,
  password: process.env.PASSWORD_DB,
  port: 5432
});

export default pool;
