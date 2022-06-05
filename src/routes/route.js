const express = require('express');
const router =express.router();

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

router.get('/movies/:indexNumber',function (req,res){
    
  res.send('My first ever api!')
});

router.get('/films',function (req,res){
  const arrSring =[{
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
   let f = arrSring[eeq.param.filmid -1]
   if(f =arrSring.length){
     res.send("no movies exists with this id")
   }
  
});

router.get('/films/:filmId',function (req,res){
    
  res.send('My first ever api!')
});

module.exports=router;