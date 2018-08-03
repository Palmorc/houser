const bodyParser = require('body-parser')
const express = require('express')
const massive = require('massive')
require('dotenv').config()

const cont = require('./controller')

const app = express()
const port = 3005

app.use(bodyParser.json())


massive(process.env.CONNECTION_STRING).then(db=>{
  console.log('Connected');
  app.set('db',db)
}).catch(err =>{
  console.log('Error, no connection', err);
})
console.log(33333)
//ENDPOINTS
app.get('/api/houses', cont.get)


app.listen(port, () => {console.log(`Server is listening on port: ${port}`);})
