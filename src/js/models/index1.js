const connection = require('../connection');
const Sequilize = require('sequelize');
const User = require('./user').User;
const Dataverse = require('./dataverse').Dataverse;

const Model = Sequilize.Model;

class DataverseUser extends Model {}
DataverseUser.init(
    {
        project_id: {
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: Dataverse,
                key: 'id'
            }
        },
        user_id: {
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
        tableName: 'project_user'
    }
);

Dataverse.belongsToMany(User, {
    through: 'project_user',
    timestamps: false,
    foreignKey: 'project_id'
});
User.belongsToMany(Dataverse, {
    through: 'project_user',
    timestamps: false,
    foreignKey: 'user_id'
});


module.exports = {
    User,
    Project
};