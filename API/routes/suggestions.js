const express = require('express');
const router = express.Router();
const jsonArray=require("../../services/getData");
const {distance,score}=require("../../services/service");

router.get('/',async (req, res) => {
    let q=req.query;
	let scoredArray=new Array(10).fill(0);
    //console.log(jsonArray);
let result= await jsonArray.filter(item=>
   item["Geographical Name"].toLowerCase().indexOf(q.name.toLowerCase()) !== -1);
 
 	//calculate distance;  
for(let item of result){

    item['distance']=distance(item.Latitude-q.Latitude,item.Longitude-q.Longitude)

}
 
    //sort the result
	result.sort((a,b)=>a["distance"]-b["distance"])
	
	//only needs max 10 suggestions; 
	if(result.length>10){scoredArray=result.slice(0,10)}
	else{scoredArray=result}

    //calculate the score;
	score(scoredArray);
	

res.status(200).json(scoredArray);
   console.log(scoredArray.slice(0,6));
});

module.exports = router;