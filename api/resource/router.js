//RESOURCE //RESOURCE //RESOURCE //RESOURCE //RESOURCE //RESOURCE //RESOURCE //RESOURCE //RESOURCE 

const express = require('express')

const Resources = require('./model.js')

const router = express.Router()

router.get('/', (req,res,next)=>{
    Resources.find()
    .then(data=>{
        res.json(data)
    })  
    .catch(next) 
   })

router.post('/', (req,res,next)=>{
    const newResource = req.body
    Resources.createProject(newResource)
    .then(resource=>{
        res.status(200).json(resource)
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

// - [ ] `[POST] /api/resources`

//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`

//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

