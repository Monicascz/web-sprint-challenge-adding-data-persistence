//PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT //PROJECT 
const express = require('express')

const Projects = require('./model.js')

const router = express.Router()

router.get('/', (req,res,next)=>{
    Projects.find()
    .then(data=>{
        res.json(data)
    })  
    .catch(next) 
   })


router.post('/', (req,res,next)=>{
    const newProject = req.body
    Projects.createProject(newProject)
    .then(project=>{
        res.status(200).json(project)
    })
    .catch(next)
})

router.use((err, req, res, next) => { 
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;

// - [ ] `[POST] /api/projects`

//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

// - [ ] `[GET] /api/projects`

//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

