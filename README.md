# RefactorThis Exercise

Re-written using
- Express (server framework)
- Knex (sql query builder)
- Celebrate (validation middleware for requests)
- Jest (test suite)

TODOs:
1. fix config to provision test DB in :memory: using knex (currently points to dev SQLite instance)
2. need further testing on consolidating HTTP responses (should abstract into own util)

## How to run

1. Have yarn installed
2. Run ```yarn``` to install dependencies
3. Spin up Express by running ```yarn start:dev```
4. Use the included Insomnia collection to test endpoint responses
5. To run tests, run ```yarn test```

# Contributing

## Database Management via Knex

Sqlite DB has already been provisioned and seeded with test data for products in this repo. However if you need to re-seed or add a new table, you can follow these instructions.

### Initialize DB

NOTE: for running knex commands we need to add --esm flag to let knex know we are using ES Modules ([Related reading](redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1))

1. Run ```yarn run knex init```
2. Update the generated `knexfile.js` as follows:
   ```js
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3'
      },
      seeds: {
        directory: './src/database/seeds'
      },
      useNullAsDefault: true
    },

    test: {
      client: 'sqlite3',
      connection: {
        filename: ':memory:'
      },
      seeds: {
        directory: './tests/seeds'
      }
    }
   ```

### Create table, Migration & Seed

1. Initiate database setup ```yarn run knex migrate:make <tablename> --esm```
   - creates/updates `/migrations` folder with migration file (NOTE: do not edit the filename, versioning is tracked in a sqlite table)
   - "Migrate Before Create!"
2. Set up schema in the newly created migration file ([Schema Ref](https://devhints.io/knex#schema))
3. Initiate Migration ```yarn run knex migrate:latest --esm```
   - If need to rollback, run ```yarn run knex migrate:rollback --esm```
4. Once migration applied, run ```yarn run knex seed:make dev-<tablename> --esm```
   - Creates new directory `/seeds` with file named 'dev-<tablename>' for seed data
   - Edit the file to point to table and your test data
   - Slight modification to export syntax is needed (check existing seed files) for ES modules
5. Run ```yarn run knex seed:run --esm```