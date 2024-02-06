// const express = require("express")
import express from "express";
const app = express();
import cors from 'cors';

app.use(cors());
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Your App is Running on the port of ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send("Congretullations Your app is running")
})

app.get('/api/jokes',(req,res)=>{
    const joke = [
        {
            id: 1,
            title:"first",
            contetnt:"this is first joke"
        },
        {
            id: 2,
            title:"first",
            contetnt:"this is first joke"
        },
        {
            id: 3,
            title:"first",
            contetnt:"this is first joke"
        }
    ]
    res.send(joke)
})