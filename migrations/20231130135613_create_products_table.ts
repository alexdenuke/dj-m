import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('products', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
      table.string('sku').unique().notNullable(); // Артикул
      table.decimal('price').notNullable();
      // Добавьте другие поля по необходимости
    });
  }


  export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('products');
  }

