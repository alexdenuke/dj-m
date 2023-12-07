// seeds/seed_products.ts
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('products').del();

  // Inserts seed entries
  await knex('products').insert([
    { name: 'Товар 1', description: 'Описание товара 1', sku: 'ART1001', price: 100.00 },
    { name: 'Товар 2', description: 'Описание товара 2', sku: 'ART1002', price: 200.00 },
    // Добавьте больше товаров по аналогии
  ]);
};
