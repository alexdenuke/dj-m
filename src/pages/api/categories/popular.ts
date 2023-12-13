import knex from "knex";
import type { NextApiRequest, NextApiResponse } from "next";
import knexConfig from "../../../../knexfile";

const db = knex(knexConfig[process.env.NODE_ENV || "development"]);

export default async function handler(
  reg: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const popularCategories = await db("categories")
      .where("is_popular", true)
      .select("*");

    res.status(200).json(popularCategories);
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
