const router = require('express').Router();

const homeRoute = require('./homeRoute');

router.use('/home', homeRoute);
router.use('/portfolio', portfolioRoute);
router.use('*', baseRoute);