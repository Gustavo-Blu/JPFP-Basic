'use strict';

const {
  db,
  models: { Robot, Project },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Robots
  const robots = await Promise.all([
    Robot.create({ name: 'cody' }),
    Robot.create({ name: 'murphy' }),
    Robot.create({ name: 'zeke' }),
  ]);
  console.log(`seeded ${robots.length} robots`);

  const projects = await Promise.all([
    Project.create({
      title: 'History',
      description: 'make a physical memorial for an event in history',
    }),
    Project.create({
      title: 'Math',
      description:
        'study for calculus 2 exam and final, and do the same for physics 1',
    }),
    Project.create({
      title: 'Computer Science',
      description:
        'finish coding exercises and get back into software engineering',
    }),
    Project.create({
      title: 'Game Dev',
      description: 'work on making a game engine with c++',
    }),
  ]);
  console.log(`seeded ${projects.length} projects`);

  console.log('adding relations');
  let Robots = {
    cody: robots[0],
    murphy: robots[1],
    zeke: robots[2],
  };

  let Projects = {
    history: projects[0],
    math: projects[1],
    compsci: projects[2],
    gamedev: projects[3],
  };

  await Robots.cody.addProjects([
    Projects.history,
    Projects.math,
    Projects.compsci,
    Projects.gamedev,
  ]);

  await Robots.murphy.addProjects([Projects.math, Projects.gamedev]);
  console.log('added relations successfully');

  console.log(`seeded successfully`);

  return {
    Robots,
    Projects,
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
