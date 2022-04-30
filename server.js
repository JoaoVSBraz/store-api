const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 5432
const router = express.Router()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api', router)

router.get('/', function (req, res) {
  res.send('Hello')
})

app.listen(port, () => { console.log(`Server running on port ${port}`); }) 