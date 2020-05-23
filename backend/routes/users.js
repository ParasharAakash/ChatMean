var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');

// router.post('/register',function(req,res,next){
//   console.log(req.headers);
//   res.send("HoGa Hoga");
// })
router.post('/register',  function(req,res,next){
  var user = new User({
    fullname:req.body.fullname,
    mobile:req.body.mobile,
    email: req.body.email,
    password: req.body.password,
    // creation_dt: Date.now()
  });
  user.save((err,contact)=>{
    if(err)
    {
      res.json({msg :"failed to add data"});
    }
    else{
      res.json({msg :"contact added succesfully"});
    }
  });
});
//   promise.then(function(doc){
//     return res.status(201).json(doc);
//   })

//   promise.catch(function(err){
//     return res.status(501).json({message: 'Error registering user.'})
//   })
// })

// router.post('/login', function(req,res,next){
//    let promise = User.findOne({email:req.body.email}).exec();

//    promise.then(function(doc){
//     if(doc) {
//       if(doc.isValid(req.body.password)){
//           // generate token
//           let token = jwt.sign({username:doc.username},'secret', {expiresIn : '3h'});

//           return res.status(200).json(token);

//       } else {
//         return res.status(501).json({message:' Invalid Credentials'});
//       }
//     }
//     else {
//       return res.status(501).json({message:'User email is not registered.'})
//     }
//    });

//    promise.catch(function(err){
//      return res.status(501).json({message:'Some internal error'});
//    })
// })

// router.get('/email', verifyToken, function(req,res,next){
//   return res.status(200).json(decodedToken.username);
// })

// var decodedToken='';
// function verifyToken(req,res,next){
//   let token = req.query.token;

//   jwt.verify(token,'secret', function(err, tokendata){
//     if(err){
//       return res.status(400).json({message:' Unauthorized request'});
//     }
//     if(tokendata){
//       decodedToken = tokendata;
//       next();
//     }
//   })
// }

module.exports = router;