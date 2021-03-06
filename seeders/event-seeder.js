'use strict';

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {

    let events = [];

    for(let i = 0; i < 30; i++){
      const event = {
        eventName: faker.hacker.verb(),
        category: faker.hacker.verb(),
        description: faker.hacker.phrase(),
        priority: faker.random.arrayElement(["A","B","C"]),
        lastDate: faker.date.past(),
        nextDue: faker.date.future(),
        completed: faker.random.arrayElement([0,1]),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      events.push(event);
    }

    return queryInterface.bulkInsert('Events', events, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};