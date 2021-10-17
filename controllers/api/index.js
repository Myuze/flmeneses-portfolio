const router = require('express').Router();

const appRoutes = require('./appRoute');

router.use('/apps', appRoutes);

module.exports = router;
