const connection = require('../connection');
const Sequilize = require('sequelize');
const User = require('./user').User;
const Dataverse = require('./dataverse').Dataverse;

const Model = Sequilize.Model;

class DataverseUser extends Model {}
DataverseUser.init(
    {
        Dataverse_id: {
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: Dataverse,
                key: 'id'
            }
        },
        User_id: {
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
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