//RESOURCE //RESOURCE //RESOURCE //RESOURCE //RESOURCE //RESOURCE //RESOURCE //RESOURCE //RESOURCE 
const db = require("../../data/dbConfig.js")


//{"resource_id":1,"resource_name":"foo","resource_description":null}

async function find(){
    return db("resources")
    .select("resources.*")
    
}
async function createProject(newResource){ 
    const [resource_id]= await db('resources').insert(newResource)
     find().where("resource_id", resource_id)
}

module.exports = {
    find,
    createProject
}