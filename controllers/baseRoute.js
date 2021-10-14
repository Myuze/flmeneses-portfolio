const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).render('main');
  } catch (err) {
    console.log(err);
    res.status(500).render('404');
  }
});

module.exports = router;
