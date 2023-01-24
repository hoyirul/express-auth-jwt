'use strict';
var bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: "User Test",
        email: 'user@test.com',
        password: bcrypt.hashSync('password'),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Admin Test",
        email: 'admin@test.com',
        password: bcrypt.hashSync('password'),
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Moderator Test",
        email: 'mod@test.com',
        password: bcrypt.hashSync('password'),
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', { email: 'admin@test.com' }, {

    });
  }
};
