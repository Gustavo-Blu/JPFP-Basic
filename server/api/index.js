const router = require('express').Router();
module.exports = router;

router.use('/robots', require('./robots'));
router.use('/projects', require('./projects'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
