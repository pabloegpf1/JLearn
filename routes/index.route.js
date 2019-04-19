// temporary serving view GET requests
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('pages/index');
});

router.get('/home', (req, res) => {
	res.render('pages/ilearn-homepage');
});

router.post('/login',(req, res)=> {
  console.log("request: ");
  console.log(req.body);
  res.send('hello');
});

module.exports = router;