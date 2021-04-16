//TASK //TASK //TASK //TASK //TASK //TASK //TASK //TASK //TASK 

const db = require("../../data/dbConfig.js")


async function find(){
    return db("tasks as t")
    .join("projects as p", "p.project_id", "t.project_id")
    .select("t.task_id", "t.task_description", "t.task_notes", "t.task_completed", "p.project_name", "p.project_description ")

}
async function createProject(newTask){ 
    const [task_id]= await db('tasks').insert(newTask)
    // if(newTask.task_completed === 0){
    //     return newTask.task_completed = "false"
    // }if(newTask.task_completed === 1){
    //     return newTask.task_completed = "true"
    // }
    return find().where("task_id", task_id).first();
}

module.exports = {
    find,
    createProject
}