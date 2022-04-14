const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))

app.listen(port, () => { console.log(`Server running on port ${port}`); })