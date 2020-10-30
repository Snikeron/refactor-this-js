import { resolve } from 'path';

const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: resolve('src', 'database', 'db.sqlite'),
    },
    migrations: {
      directory: resolve('src', 'database', 'migrations'),
    },
    seeds: {
      directory: './src/database/seeds',
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: resolve('src', 'database', 'db.sqlite'),
    },
    migrations: {
      directory: resolve('src', 'database', 'migrations'),
    },
    seeds: {
      directory: './tests/seeds',
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: resolve('src', 'database', 'db.sqlite'),
    },
    migrations: {
      directory: resolve('src', 'database', 'migrations'),
    },
    useNullAsDefault: true,
  },
};

export default config;
