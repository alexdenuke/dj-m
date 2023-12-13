import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('brands').del();

    // Inserts seed entries
    await knex('brands').insert([
        { name: 'Pioneer', description: 'Крутая фирма Пионер' },
        { name: 'Sony', description: 'Крутая фирма Sony' },
        { name: 'Yamaha', description: 'Крутая фирма Ямаха' },
    ]);
};
