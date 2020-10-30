// eslint-disable-next-line import/prefer-default-export
export const seed = (knex) => knex('products').del()
  .then(() => knex('products').insert([
    {
      Id: '8f2e9176-35ee-4f0a-ae55-83023d2db1a3',
      Name: 'Samsung Galaxy S7',
      Description: 'Newest mobile product from Samsung.',
      Price: 1024.99,
      DeliveryPrice: 16.99,
    },
    {
      Id: 'de1287c0-4b15-4a7b-9d8a-dd21b3cafec3',
      Name: 'Apple iPhone 6S',
      Description: 'Newest mobile product from Apple.',
      Price: 1299.99,
      DeliveryPrice: 15.99,
    },
    {
      Id: '39f1682b-52fb-4487-a65b-840d698a8d4e',
      Name: 'Apple iPhone 20S',
      Description: 'Comes with an affordable mortgage.',
      Price: 99999.99,
      DeliveryPrice: 15.99,
    },
  ]));
