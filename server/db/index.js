//this is the access point for all things database related!

const db = require('./db');

const Robot = require('./models/Robot');
const Project = require('./models/Project');

//associations could go here!
Robot.belongsToMany(Project, { through: 'RobtoProj' });
Project.belongsToMany(Robot, { through: 'RobtoProj' });

module.exports = {
  db,
  models: {
    Robot,
    Project,
  },
};
