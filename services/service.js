
const distance=(x,y)=>{
  
    try{
         if(isNaN(Number(x))) throw "x is not a number";
         if(isNaN(Number(y))) throw "y is not a number";
    return Math.pow(x,2)+Math.pow(y,2)
}catch(err){
    //console.error(err.message);    
     console.log(err)  
   throw err
}
}

const score=arr=>{
    try{
        if (!(arr instanceof Array)) throw "error"
        for (let i=0;i<arr.length;i++){
		arr[i]["score"]=1-arr[i].distance/arr[arr.length-1].distance
		}
       // return arr;
    } catch(err){
    console.error(err.message)
    throw err
        }
    
}

const suggestions= async (arr,q)=>{
let scoredArray=new Array(10).fill(0);
    let result= await arr.filter(item=>
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
//console.log(scoredArray)

return scoredArray
}

module.exports={distance,score,suggestions}