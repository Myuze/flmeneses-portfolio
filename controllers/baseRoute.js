const router = require('express').Router();
const { App } = require('../models');

router.get('/', async (req, res) => {
  try {
    const appData = await App.findAll();

    const apps = appData.map((app) => app.get({ plain: true }));

    res.status(200).render('home', { apps });
  } catch (err) {
    console.log(err);
    res.status(500).render('404');
  }
});

module.exports = router;
