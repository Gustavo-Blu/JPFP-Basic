const router = require('express').Router();
const {
  models: { Robot, Project },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const robots = await Robot.findAll({
      attributes: ['id', 'name', 'fuelType', 'fuelLevel', 'imageUrl'],
      include: Project,
    });
    res.json(robots);
  } catch (err) {
    next(err);
  }
});
