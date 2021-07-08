const {Sequelize} =  require('sequelize');
const sequelize = new Sequelize('postgres://zlomtnxp:Rw4iFJu5iMJMd7x39UsAd6MsKKggLpuT@queenie.db.elephantsql.com/zlomtnxp');

async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = sequelize;