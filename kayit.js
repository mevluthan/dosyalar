const knex=require("./knex");
function createKayit(kayit) {  return knex("kayit").insert(kayit); };
function getAllKayit() {  return knex("kayit").select("*"); };
function deleteKayit(id) {  return knex("kayit").where("id",id).del(); };
function guncelleKayit(id,kayit) {  return knex("kayit").where("id",id).update(kayit) }


module.exports={
    createKayit,
    getAllKayit,
    deleteKayit,
    guncelleKayit

}