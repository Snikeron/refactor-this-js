import db from '../../src/database/connection.js';

beforeAll(async () => {
  await db.migrate.down();
  await db.migrate.latest();
});

afterAll(async () => {
  await db.migrate.down();
  await db.destroy();
});
