const express = require('express');
const router = express.Router();
const jsonArray=require("../../services/getData");
const {suggestions}=require("../../services/service");
const Joi = require('joi');

router.get('/',async (req, res) => {
    let q=req.query;
    //console.log(Joi.number().validate(q.Longitude).value);
   //console.log(Joi.string().validate('hehe'));
    if(Joi.number().validate(q.Longitude).error||Joi.number().validate(q.Latitude).error){
        res.json("Latitude or Longitude Error")
       return
    }    
let aa= await suggestions(jsonArray,q);
//console.log(aa);
res.status(200).json(aa); 
});

module.exports = router;