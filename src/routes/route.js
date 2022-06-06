const express = require('express');
const router =express.Router();

router.get('/movies',function(req,res){
    const movies=['Rang De Basanti','The Shining','Lord of the Rings','Batman begins']
    res.send(movies)
})

  router.get('/movies/:indexNumber',function(req,res){
    let index = req.params.indexNumber
    let movies =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
      if(index < movies.length && index >=0){
        res.send(movies[index])}
})    

 router.get('/movies/:moviesNumber',function(req,res){
   const movie=['Rang De Basanti','The Shining','Lord of the Rings','Batman begins']
    let k=req.params.moviesNumber
    let flag=0
    for(let i=0;i<4;i++){
        if(k==i){
            flag=1
            break
        }
    }
        if(flag==1){
             return res.send(movie[k])
        }
        else{
            return res.send("please enter a valid index b/w 0-3")
        }
    })

router.get('/films',function(req,res){
    const film=[{'id':1,'name':'Rang De Basanti'},{'id':2,'name':'Incendies'},{'id':3,'name':'The Shining'},{'id':4,'name':'Finding Nemo'}]
    res.send(film)
})

router.get('/films/:filmid',function(req,res){
    const film=[{'id':1,'name':'Rang De Basanti'},{'id':2,'name':'Incendies'},{'id':3,'name':'The Shining'},{'id':4,'name':'Finding Nemo'}]
    let x=req.params.filmid
    x=x-1
    let flag=0
    for(let i=0;i<4;i++){
        if(i==x){
            flag=1
            break
        }}
        if(flag==1){
            return res.send(film[x])
        }
        else{
            return res.send("no movie exists with this id")
        }
    
})

   module.exports=router;

