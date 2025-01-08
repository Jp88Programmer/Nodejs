import express from 'express';

const app = express();

app.get("/",(req,res) => {
    res.send(`This is Home page`);
})

app.get("/name",(req,res) => {
    res.send(`Hello ${req.query.name}`);
})

app.get("/about",(req,res) => {
    res.send("About Page");
})

app.listen(4000,() => {
    console.log("Server is running on port 4000");
})
