const express = require('express');

const app = express();
const fs = require('fs')
const csv = require('csvtojson');

let jsonArray

//read csv data;
csv()
  .fromFile('./exercise-ca.csv', 'utf8')
  .then(function(jsonArrayObj){ 
  jsonArray=jsonArrayObj;    
   })
app.use((req, res, next) => {
  console.log('Time: ',Date(Date.now()));
  next();
});

app.get('/', (req, res) => {
	console.log(req.query)
  res.send('Successful response.');
});
app.get('/suggestions',(req,res)=>{	
	let q=req.query;
	let scoredArray=new Array(10).fill(0);
	let result=jsonArray.filter(item=>item["Geographical Name"].toLowerCase().indexOf(q.name.toLowerCase()) !== -1)
	
	//calculate distance;
	for (let i=0;i<result.length;i++){
		result[i]["distance"]=Math.pow(result[i].Latitude-q.Latitude,2)	
	}	
	
	//sort the result
	result.sort((a,b)=>a["distance"]-b["distance"])
	
	//only needs max 10 suggestions; 
	if(result.length>10){scoredArray=result.slice(0,10)}
	else{scoredArray=result}
	
	//calculate the score;
	for (let i=0;i<scoredArray.length;i++){
		scoredArray[i]["score"]=1-scoredArray[i].distance/scoredArray[scoredArray.length-1].distance
		
	}
	
	console.log(scoredArray);
	res.json(scoredArray);
})

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
