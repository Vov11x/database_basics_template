const connection = require('../connection');
const Sequilize = require('sequelize');
const User = require('./user').User;
const Dataverse = require('./dataverse').Dataverse;

const Model = Sequilize.Model;

class Access extends Model {}
Access.init(
    {
        User_id: {
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        Dataverse_id: {
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: Dataverse,
                key: 'id'
            }
        },
        role: {
            type: Sequilize.STRING,
            allowNull: false
        }
    },
    {
        sequelize: connection,
        tableName: 'Access'
    }
);

Dataverse.belongsToMany(User, {
    through: 'Access',
    timestamps: false,
    foreignKey: 'Dataverse_id'
});
User.belongsToMany(Dataverse, {
    through: 'Access',
    timestamps: false,
    foreignKey: 'User_id'
});

module.exports = {
    User,
    Dataverse
};
