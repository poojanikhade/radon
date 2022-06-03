//problem 4-1
const lodash = require('lodash');

function splitIntoChunk(arr, chunk) {
    for (i=0; i < arr.length; i += chunk) {
        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }
}
 const array = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
 const chunk = 3;

 //problem 4-2

 let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

 let odds = arr.filter(n => n%2)

 let x = [1,3,5,7,9,11,13,15,17,19]
  
 let newArray = lodash.tail(x);

 //problem 4-3
 const merge =lodash.union([5,1,7,9],
                          [1,3,2,8],
                          [5,3,1,7],
                          [9,4,2,5],
                          [5,8,4,6]);
 
     //console.log(merge);
//problem 4-4

var kvPairs = [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']];
var result = lodash.fromPairs(kvPairs);
//console.log(kvPairs);
    

  const express = require('express');
  //const externalModule = require('../logger/logger.js')
  //const externalModule = require('../util/helper.js')
  //const externalModule = require('../validator/formatter.js')

const router = express.Router();
  
router.get('/hello',function (req,res){
    splitIntoChunk(array, chunk);
    console.log(odds)
    console.log(newArray);
    console.log(merge);
    console.log(kvPairs);
     //console.log('The constant in logger route has a value '+externalModule.endpoint)
    //console.log('The current batch is '+externalModule.batch)
    //externalModule.welcome()
    //console.log('The constant in util route has a value '+externalModule.printDate)
    //console.log('The current printMonth is '+externalModule.printMonth)
    //console.log('The current getBatchInfo is '+externalModule.getBatchInfo)
    //externalModule.trim()
    //externalModule.toLowerCase()
    //externalModule.toUpperCase()

   res.send('My first ever api!')
})
 


module.exports = router;
// adding this comment for no reason 


