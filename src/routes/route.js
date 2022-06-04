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
    // splitIntoChunk(array, chunk);
    // console.log(odds)
    // console.log(newArray);
    // console.log(merge);
    // console.log(kvPairs);
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
});
    
  
// write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
   router.get("/sol1", function (req, res) {
  //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
  let arr= [1,2,3,5,6,7]

  let totalsum = 0;
  for (var i in arr) {
      totalsum += arr[i];
  }
  let lastDigit= arr.pop()
  let consecutiveSum= lastDigit * (lastDigit+1) / 2
  let missingNumber= consecutiveSum - totalsum

  res.send(  { data: missingNumber  }  );
});

//write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
router.get("/sol2", function (req, res) {
  //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
  let arr= [33, 34, 35, 37, 38]
  let len= arr.length

  let totalsum = 0;
  for (var i in arr) {
      totalsum += arr[i];
  }
  let firstDigit= arr[0]
  let lastDigit= arr.pop()
  let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
  let missingNumber= consecutiveSum - totalsum
 
  res.send(  { data: missingNumber  }  );
});






   module.exports = router;
// adding this comment for no reason 


