//PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT 
//{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}

const db = require("../../data/dbConfig.js")

async function find(){
    return db("projects")
    .select("projects.*")
    }
async function createProject(newProject){
    // const projectArr = await db("projects").insert(newProject)
       

    // projectArr.forEach(project=>{
    //     const changetoFalse=()=>{
    //         project.project_completed=false;
    //     }
    //     const changetoTrue=()=>{
    //         project.project_completed=true;
    //     }
    //     if(project.project_completed === 0){
    //         changetoFalse()
    //     } if(project.project_completed === 1){
    //          changetoTrue
    //     }
    //     return project
    // })
    
    const [project_id]= await db('projects').insert(newProject)
    return find().where({project_id}).first();
    
        
    
}

module.exports = {
    find,
    createProject
}