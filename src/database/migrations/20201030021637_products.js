const up = (knex) => knex.schema.createTableIfNotExists('products', (table) => {
  table.string('Id').primary();
  table.string('Name').notNullable();
  table.string('Description').notNullable();
  table.decimal('Price', 8, 2).notNullable();
  table.decimal('DeliveryPrice', 8, 2).notNullable();
});

const down = (knex) => knex.schema.dropTable('products');

export { up, down };
