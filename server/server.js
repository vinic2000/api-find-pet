const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser')
const routerUser =  require('./router.user');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//importando rota de usuário
app.use(routerUser);

app.get('/', (req, res) => {
  res.json({sucess: 'ok'});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})


module.exports = app;