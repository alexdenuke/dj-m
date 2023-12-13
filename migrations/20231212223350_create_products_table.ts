import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('products', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
      table.string('sku').unique().notNullable(); // Артикул
      table.decimal('price').notNullable();
      table.integer('category_id').unsigned();
      table.integer('brand_id').unsigned();
      table.foreign('category_id').references('categories.id');
      table.foreign('brand_id').references('brands.id');
      // Добавьте другие поля по необходимости
    });
  }


  export async function down(knex: Knex): Promise<void> {
    // await knex.schema.dropTable('products');
  }

