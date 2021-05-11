 const knex=require("knex");

 const connectedKnex=knex({
     client:"sqlite3",
     connection:{  filename:"/veritabani/veritabani.db"  }  });
    module.exports=connectedKnex;