const connection = require('../connection');
const Sequilize = require('sequelize');
const User = require('./user').User;
const Project = require('./project').Project;

const Model = Sequilize.Model;

class ProjectUser extends Model {}
ProjectUser.init(
    {
        project_id: {
            type: Sequilize.INTEGER,
            allowNull: false,
            references: {
                model: Project,
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

Project.belongsToMany(User, {
    through: 'project_user',
    timestamps: false,
    foreignKey: 'project_id'
});
User.belongsToMany(Project, {
    through: 'project_user',
    timestamps: false,
    foreignKey: 'user_id'
});


module.exports = {
    User,
    Project
};