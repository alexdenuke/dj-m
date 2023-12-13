import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("categories").del();

    // Inserts seed entries
    await knex("categories").insert([
        { name: 'Электроника', is_popular: true },
        { name: 'Бытовая техника', is_popular: false },
        { name: 'Спортивные товары', is_popular: true },
        { name: 'Популярная', is_popular: true },
        { name: 'Популярная 2', is_popular: true },
        { name: 'Популярная 3', is_popular: true },
        { name: 'Популярная 4', is_popular: true },
        { name: 'Популярная 5', is_popular: true },
        { name: 'Популярная 6', is_popular: true },
    ]);
};
