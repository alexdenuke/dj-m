import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("brands", (table) => {
    table.increments("id").primary(); // Уникальный идентификатор бренда
    table.string("name").notNullable(); // Название бренда
    table.string("description"); // Описание бренда (необязательное поле)
  });
};

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('brands');
}
