const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  const html = `
    <form action="http://127.0.0.1:3000/post-to-post" method="POST">
      <input type="text" name="code" value="test-code" />
      <button type="submit">submit</button>
    </form>
  `
  res.send(html)
})

app.post('/post-to-post', (req, res) => {
  // res.send('post-to-post\n')
  console.log('[SERVER1] RECEIVE POST DATA');
  res.redirect(307, 'http://192.168.99.100:8088/post-to-post');
})

app.listen(3000)
console.log('START SERVER1')
