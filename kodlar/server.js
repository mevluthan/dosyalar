const express=require("express")
const app= express()
const bodyParser =require('body-parser')
const db=require("./veritabani/veritabani");
//const db = require('path').join(__dirname,'/.js')

app.use(bodyParser.urlencoded({extended:false }));
app.use(bodyParser.json());

app.post("/kayit", async(req,res)=>{ 
    const result =await db.createKayit(req.body);
    res.status(201).json({id:result[0] });
});

app.get("/kayit", async(req,res)=>{ 
    const  kayit=await db.getAllKayit();
    res.status(200).json({ kayit });
});

app.patch("/kayit/:id", async(req,res)=>{ 
    const id=await db.uptadeKayit(req.params.id, req.body);
    res.status(200).json({id });
});

app.delete("/kayit/:id", async(req,res)=>{ 
    await db.deleteKayit(req.params.id);
    res.status(200).json({success:true});
});

app.get(  "/test",(req,res)=>{  res.status(200).json({success:true}); } );
app.listen(1337,()=>console.log("server is running on port 1337"));
