const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({status:'OK', message:'Todo OK'})
})

module.exports = router;