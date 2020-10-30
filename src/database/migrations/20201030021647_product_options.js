const up = (knex) => knex.schema.createTableIfNotExists('product_options', (table) => {
  table.string('Id').primary();
  table.string('ProductId').notNullable();
  table.foreign('ProductId').references('Id').inTable('products');
  table.string('Name').notNullable();
  table.string('Description').notNullable();
});

const down = (knex) => knex.schema.dropTable('product_options');

export { up, down };
