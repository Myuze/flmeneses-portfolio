const router = require('express').Router();

const { App } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const appData = await App.findAll();
    res.status(200).json(appData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const appData = await App.findByPk(req.params.id);
    res.status(200).json(appData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
