const express = require('express')

const Tasks = require('./model.js')

const router = express.Router()


router.get('/', (req,res,next)=>{
    Tasks.find()
    .then(data=>{
        res.json(data)
    })  
    .catch(next) 
   })

router.post('/', (req,res,next)=>{
    const newTask = req.body
    Tasks.createProject(newTask)
    .then(task=>{
        res.status(200).json(task)
    })
    .catch(next)
})

router.use((err, req, res) => { 
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;
// - [ ] `[POST] /api/tasks`

//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`