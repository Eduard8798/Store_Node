'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: false, // Замените на true, если поле может быть пустым
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'password');
  }

};
