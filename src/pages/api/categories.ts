console.log('Current NODE_ENV:', process.env.NODE_ENV);
import knex from 'knex';

import('dotenv/config');
import knexConfig from '../../../knexfile'
import type { NextApiRequest, NextApiResponse } from "next";

const db = knex(knexConfig[process.env.NODE_ENV]);

// const db = knex(knexConfig[environment]);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "GET") {
    try {
      const rows = await db('categories').select('*');
      res.status(200).json(rows);
    } catch (error) {
      console.error("Ошибка при подключении к базе данных:", error);
      res.status(500).json({ error: "Ошибка при получении данных из базы данных" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
