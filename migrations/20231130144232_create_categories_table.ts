import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('categories', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
      // Добавьте другие поля по необходимости
    });
  }


  export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('categories');
  }

