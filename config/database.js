const { Sequelize } = require('sequelize')
const config = require('./index.js')
const env = process.env.NODE_ENV || 'development'
const sequelize = new Sequelize(config[env]);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('连接成功');
    } catch (error) {
        console.error('连接失败', error);
    }
})()