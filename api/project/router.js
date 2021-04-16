const router = require('express').Router();

router.use('*', (req, res) => {
  res.status(200).json({
    message: 'OK',
  });
});

module.exports = router;
