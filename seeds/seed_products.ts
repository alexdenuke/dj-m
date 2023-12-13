// seeds/seed_products.ts
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('products').del();

  // Inserts seed entries
  await knex('products').insert([
    { name: 'Микшер', description: 'Описание микшера', sku: 'ART1001', price: 100000.00, category_id: 1, brand_id: 1},
    { name: 'Питчер', description: 'Описание Питчера', sku: 'ART1002', price: 26600.00, category_id: 2, brand_id: 1},
    { name: 'Кноб', description: 'Описание Кноба', sku: 'ART1003', price: 10700.00, category_id: 1, brand_id: 2},
    { name: 'Вертушка', description: 'Описание Вертушки', sku: 'ART1004', price: 11200.00, category_id: 3, brand_id: 2},
    { name: 'Лампочка', description: 'Описание Лампочки', sku: 'ART1005', price: 19.00, category_id: 1, brand_id: 1},
    { name: 'Кабель', description: 'Описание Кабеля', sku: 'ART1006', price: 230.00, category_id: 2, brand_id: 3},
    // Добавьте больше товаров по аналогии
  ]);
};
