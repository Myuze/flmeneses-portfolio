const router = require('express').Router();

const homeRoute = require('./homeRoute');
const portfolioRoute = require('./portfolioRoute');
const baseRoute = require('./baseRoute');
const apiRoutes = require('./api');

router.use('/home', homeRoute);
router.use('/portfolio', portfolioRoute);
router.use('/api', apiRoutes);
router.use('*', baseRoute);

module.exports = router;
