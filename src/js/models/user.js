const connection = require('../connection');
const Sequilize = require('sequelize');

const Model = Sequilize.Model;
class User extends Model {}
User.init(
    {
        id: {
            type: Sequilize.INTEGER,
            field: 'id',
            primaryKey: true,
            allowNull: false
        },
        nickname: {
            type: Sequilize.STRING,
            allowNull: false
        },
        password: {
            type: Sequilize.STRING,
            allowNull: false
        },
        email: {
            type: Sequilize.STRING,
            allowNull: false
        },
        role: {
            type: Sequilize.STRING,
            allowNull: false
        }
    },
    {
        sequelize: connection,
        modelName: 'user'
    }
);

module.exports = {
    User
};
