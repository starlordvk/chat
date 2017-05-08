var express = require('express');
var router = express.Router();
var User= require('../databases/Users.js');


/* GET users listing. */
router.post('/', register);

function register(req,res){
	var user = new User(req.body);
	user.save((err, user) => {
		if (err) throw err;
		
		res.status(200).send(user);
	});
}
module.exports = router;
