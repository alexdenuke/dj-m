import type { NextApiRequest, NextApiResponse } from 'next'
import pool from '../../lib/db'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
      const result = await pool.query('SELECT * FROM my_table');
      res.json(result.rows);
  } catch (error: any) {
      res.status(500).json({ error: error.message });
  }
};
