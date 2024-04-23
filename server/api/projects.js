const router = require('express').Router();
const {
  models: { Project, Robot },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: [
        'id',
        'title',
        'deadline',
        'priority',
        'completed',
        'description',
      ],
      include: Robot,
    });
    res.json(projects);
  } catch (err) {
    next(err);
  }
});
