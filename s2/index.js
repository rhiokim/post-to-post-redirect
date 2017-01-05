const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('working server2')
})

app.post('/post-to-post', (req, res) => {
  console.log('[SERVER2] RECIVED POST DATA FROM [SERVER1]')
  console.log('POST HEADER:', req.headers)
  console.log('POST BODY:', req.body)
  // const result = `
  //   [SERVER2] RECEIVED POST DATA FROM SERVER1 <br/>
  //   POST HEADER: ${JSON.stringify(req.headers)} <br/>
  //   POST BODY: ${JSON.stringify(req.body)}
  // `
  res.send('post-to-post\n')
})

app.listen(3000)

console.log('START SERVER2')
