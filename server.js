// Backend server  NodeJs = via EXPRESS NESTJS framework
// Backend server Python = via DJANGO FastAPI
const express = require('express')
const app = express()

// Traditional API
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')                 
})

// Rest API
app.get('/rest', (req, res) => {
    res.json({name: "Marco", age: 21, group: "MIT"})    // Rest API
  })

app.listen(3000, () => {
  console.log(`Backend Server is running on port 3000`)
})
