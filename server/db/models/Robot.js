const Sequelize = require('sequelize');
const db = require('../db');

const Robots = db.define('Robot', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  fuelType: {
    type: Sequelize.ENUM('gas', 'diseal', 'electric'),
    defaultValue: 'electric',
  },
  fuelLevel: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 100,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/dims.apnews.jpg',
  },
});

module.exports = Robots;
