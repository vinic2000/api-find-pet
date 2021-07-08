const express = require('express')
const { regexp } = require('sequelize/types/lib/operators')
const app = express()

//importando model de usuário
const Users =  require('../modal/user.modal')

app.post('/user/add/', (req, res) => {
    const user = await Users.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        cep: req.body.cep,
        endereco: req.body.endereco,
        bairro: req.body.endereco,
        cidade: req.body.cidade,
        estado: req.body.estado
    });

    res.json({Sucess: "Usuário cadastrado com sucesso"})
});
  
app.post('/user/edit/:id', (req, res) => {
    res.json({sucess: 'ok'})
})

app.delete('/user/del/:id', (req, res) => {
    res.json({sucess: 'ok'})
})

app.get('/user/all', (req, res) => {
    res.json({sucess: 'ok'})
})

app.get('/user/:id', (req, res) => {
    res.json({sucess: 'ok'})
})

module.exports = app;