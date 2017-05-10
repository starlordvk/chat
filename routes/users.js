var express = require('express');
var router = express.Router();
var User= require('../databases/Users.js');


/* GET users listing. */

router.post('/', [isLogin,register]);

function register(req,res){
	var user = new User(req.body);
	user.save((err, user) => {
		if (err) throw err;
		
		res.status(200).send(user);
	});
}

function isLogin(req,res,next)
{
User.findOne({'email':req.body.email},(err,doc)=>{
		if(err)
		{
			throw err;
		}
		if(!doc)
		{
			next();
		}
		else
		{
			console.log("Logging you in..");
			res.status(200).send(doc);
		}
		
	});
}
module.exports = router;



