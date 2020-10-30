// eslint-disable-next-line import/prefer-default-export
export const seed = (knex) => knex('product_options').del()
  .then(() => knex('product_options').insert([
    {
      Id: '5c2996ab-54ad-4999-92d2-89245682d534',
      ProductId: 'de1287c0-4b15-4a7b-9d8a-dd21b3cafec3',
      Name: 'Rose Gold',
      Description: 'Gold Apple iPhone 6S',
    },
    {
      Id: '9ae6f477-a010-4ec9-b6a8-92a85d6c5f03',
      ProductId: '9ae6f477-a010-4ec9-b6a8-92a85d6c5f03',
      Name: 'White',
      Description: 'White Apple iPhone 6S',
    },
    {
      Id: '4e2bc5f2-699a-4c42-802e-ce4b4d2ac0ef',
      ProductId: 'de1287c0-4b15-4a7b-9d8a-dd21b3cafec3',
      Name: 'Black',
      Description: 'Black Apple iPhone 6S',
    },
    {
      Id: 'f03ba7b0-10dd-4e16-91d6-d6989a8ff2a8',
      ProductId: '39f1682b-52fb-4487-a65b-840d698a8d4e',
      Name: 'Goldest Gold',
      Description: 'Goldest Apple iPhone 20S',
    },
    {
      Id: 'fb958dc2-d9ae-47a1-a24b-f30ccf2f7d8a',
      ProductId: '39f1682b-52fb-4487-a65b-840d698a8d4e',
      Name: 'Blackest Black',
      Description: 'Blackest Apple iPhone 20S',
    },
  ]));
