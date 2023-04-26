const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"curd"
})

app.get("/",(req,res)=>{
    const query = "SELECT * FROM student";
    db.query(query,(err,data)=>{
        if(err) return(res.json(err));
        else return(res.json(data));
    })
})

app.post('/create',(req,res)=>{
    const query = "INSERT INTO student (`name`,`email`) VALUES (?)";
    const values = [req.body.name,req.body.email];
    db.query(query,[values],(err,data)=>{
        if(err) console.log(res.json(err));
        else return res.json(data);
    })
})

app.put('/update/:id',(req,res)=>{
    const query = "update student set `name` = ?, `email` = ? where id = ?";
    const values = [req.body.name,req.body.email];
    db.query(query,[...values,req.params.id],(err,data)=>{if(err)console.log(err); else return(res.json(data))})
})

app.delete("/delete/:id",(req,res)=>{
    const query = "DELETE FROM student where id = ?";
    db.query(query,req.params.id,(err,data)=>{
        if(err){console.log(err);}
        else return res.json(data);
    });
})

app.listen(8084,() =>{
    console.log("Working !!");
});