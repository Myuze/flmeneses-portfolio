const router = require('express').Router();

const homeRoute = require('./homeRoute');
const portfolioRoute = require('./portfolioRoute');
const baseRoute = require('./baseRoute');

router.use('/home', homeRoute);
router.use('/portfolio', portfolioRoute);
router.use('*', baseRoute);

module.exports = router;
