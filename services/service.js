
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
    } catch(err){
    console.error(err.message)
    throw err
        }
    
}

module.exports={distance,score}