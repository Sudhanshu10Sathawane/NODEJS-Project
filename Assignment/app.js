const express=require('express');
const app=express();
app.use('/user',(req,res,next)=>{
    console.log('Hii I am middleware');
});
//Route Request and get Response
app.use('/',(req,res,next)=>{
    console.log('Hii I am another middleware');
    res.send('<h1> Sudha HIII</h1>');
});

app.listen(3000);