const express = require('express')

const Tasks = require('./model.js')

const router = express.Router()

module.exports = router;

// - [ ] `[POST] /api/resources`

//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`

//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

