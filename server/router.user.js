const express = require('express')
const app = express()

//importando model de usuário
const Users =  require('../modal/user.modal')

app.post('/user/add', (req, res) => {

        const {nome, telefone, cpf, cep, endereco, bairro, cidade, estado} = req.body;

        Users.create({
            nome, 
            telefone, 
            cpf, 
            cep, 
            endereco, 
            bairro, 
            cidade, 
            estado
        }).then(res.json({success: "OK"}))
        .catch(err => res.json({erro: err}));

});
  
app.put('/user/edit/:id', (req, res) => {

    const {id} =  req.params;
    const {nome, telefone, cpf, cep, endereco, bairro, cidade, estado} = req.body;

    Users.update({
        nome, telefone, cpf, cep, endereco, bairro, cidade, estado
    },{where:{
        id:id,
        status:true
    }})
        .then(result => {
            console.log(result);
            if(result == false){
                res.json({erro : "user can' be alter. User didn't find"})
            }
            res.json({success:"OK"})
        })
        .catch(err => res.json({err}));
});

app.delete('/user/del/:id', (req, res) => {

    const {id} =  req.params;

    Users.update({status:false},{
        where:{
            id,
            status:true
        }
    }).then(res.json({success: 'ok'}))
    .catch(err => res.json({erro:err}))

})

app.get('/user/all', (req, res) => {

    Users.findAll({where:{
        status:true
    }})
        .then( result => res.json({user:result}))
        .catch(err => console.log(`Erro: ${err}`));
})

app.get('/user/:id', (req, res) => {
    
    const {id} =  req.params;
    
    Users.findByPk(id)
        .then(user => {
            res.json({user})
            console.log(user)
        })
        .catch(err => res.json({erro: err}));

})

module.exports = app;