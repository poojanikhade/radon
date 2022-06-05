const express = require('express');

// const router =express.router();

router.get('/movies',function (req,res){
    
  res.send('My first ever api!')
});

router.get('/movies/:indexNumber',function (req,res){
     let index = req.params.indexNumber
     let movies = ['Rang de basanti','The shining', 'Lord of the rings', 'Batman begins']
    if(index<movies.length && index >=0){
      res.send(movies[index])  
    }
});

router.get('/movies',function (req,res){
    
  res.send('My first ever api!')
});

router.get('/movies',function (req,res){
    
  res.send('My first ever api!')
});

router.get('/movies',function (req,res){
    
  res.send('My first ever api!')
});
 router =express.router();
module.exports=router;