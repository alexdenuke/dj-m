import knex from "knex";
import type { NextApiRequest, NextApiResponse } from "next";
import knexConfig from "../../../../knexfile"

const db = knex(knexConfig[process.env.NODE_ENV || 'development']);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const category = req.query.category;
  console.log(`Апи ${category}`);

  if (typeof category !== 'string') {
    res.status(400).json({ message: 'Некорректный запрос' });
    return;
  }

  try {
    const products = await fetchProductsFromCategory(category);
    res.status(200).json(products);
  } catch (error) {
    console.error("Ошибка при подключении к базе данных:", error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
}

async function fetchProductsFromCategory(category: string) {
  try {
    console.log(`функция ${category}`)
    const products = await db('products')
    .join('categories', 'categories.id', '=', 'products.category_id')
    .select('products.*')
    .where('categories.name', '=', category);
    return products;
  } catch (error) {
    throw error;
  }
}
