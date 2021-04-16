//PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT 
//{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}

const db = require("../../data/dbConfig.js")

async function find(){
    return db("projects")
    .select("projects.*")
}
async function createProject(newProject){
    // const projectArr = await db("projects")
    // projectArr.forEach(project=>{
    //     if(project.project_completed === 0){
    //         return project.project_completed = "false"
    //     } if(project.project_completed === 1){
    //         return project.project_completed = "true"
    //     }
    // })
    
    const [project_id]= await db('projects').insert(newProject)
    return find().where({project_id}).first();
    // if(newProject.project_completed === 1){
        
    // }
}

module.exports = {
    find,
    createProject
}