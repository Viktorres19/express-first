const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/catalog', (req, res) => {
  res.send('This is catalog!')
})

app.get('/catalog/:id', (req, res) => {
  // звалюватись параметри будуть в реквест
  req.params.id
  res.send('This is catalog id ' + req.params.id)
})

app.get('/catalog/:id/section/:part', (req, res) => {
  let info = 'catalog: ' + req.params.id + ' ' + 'part: ' + req.params.part;
  res.send(info);
})

app.post('/', (req, res) => {
  res.send('Post method')
})

//будуємо ланцюжок - url описали один раз, а обробники вистроїли в цепочку
app.route('/user').get((req, res) => {
  res.send('get user...')
}).post((req, res) => {
  res.send('create user...')
}).put((req, res) => {
  res.send('update user...')
}).delete((req, res) => {
  res.send('delete user...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// http://localhost:3000/
