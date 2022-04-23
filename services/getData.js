const csv = require('csvtojson');
const filePath ="./public/exercise-ca.csv";

//read csv data;
const jsonArray=()=>csv()
  .fromFile(filePath, 'utf8')
  .then(jsonArrayObj=>{ 
  //jsonArray=jsonArrayObj;  
//console.log(jsonArrayObj)
  return   jsonArrayObj
   })

   module.exports=jsonArray()