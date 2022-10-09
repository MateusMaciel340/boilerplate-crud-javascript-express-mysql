'use strict';

const { v4: uuid4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [{
      id: uuid4(),
      username: "mateusmaciel340",
      password: "$2a$10$oA9yp6hUbEvHulDT3UEobegmZTgkd/rAhYBYcKiP6H9l7oBzueLb6",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
