import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('products', (table) => {
    table.integer('category_id').unsigned();
    table.foreign('category_id').references('categories.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('products', (table) => {
    table.dropColumn('category_id');
  });
}

