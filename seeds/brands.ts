import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('brands').del();

    // Inserts seed entries
    await knex('brands').insert([
        { name: 'Brand1', description: 'Description for Brand1' },
        { name: 'Brand2', description: 'Description for Brand2' },
    ]);
};
