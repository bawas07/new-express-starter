'use strict';
const faker = require('faker');


module.exports = {
    up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
        const seeds = [
            { email: 'email@email.com',
                username: 'user',
                password: '123123',
                createdAt: new Date(),
                updatedAt: new Date() }
        ];
        for (let i = 0; i < 5;i++) {
            const seed = {
                email : faker.internet.email(),
                username : faker.internet.userName(),
                password : '123123',
                createdAt: new Date(),
                updatedAt: new Date()
            };
            seeds.push(seed);
        }
        console.log(seeds);
        return queryInterface.bulkInsert('users', seeds, {});
    },

    down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    }
};
