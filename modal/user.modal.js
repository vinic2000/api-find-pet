const {DataTypes} = require('sequelize');
const sequelize =  require('../connection/conn');

const Users  = sequelize.define('User', {

    nome: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    telefone: {
        type:DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type:DataTypes.STRING,
        allowNull:false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{});

Users.sync(
    {
        force: false,
        alter: true
    }
);

module.exports = Users;