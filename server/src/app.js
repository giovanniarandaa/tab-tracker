const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())


app.post('/register', (req, res) => {
  res.send({
    message: `Hola ${req.body.email}! Tu usuario ha sido registrado, Diviertete!`
  })
})

app.listen(process.env.PORT || 8081)
