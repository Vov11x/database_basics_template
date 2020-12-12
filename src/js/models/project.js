const connection = require('../connection');
const Sequilize = require('sequelize');

const Model = Sequilize.Model;

class Project extends Model {}
Project.init(
    {
        id: {
            type: Sequilize.INTEGER,
            field: 'id',
            primaryKey: true
        },
        name: {
            type: Sequilize.STRING,
            allowNull: false
        },
        description: {
            type: Sequilize.STRING,
            allowNull: false,
        },
        site_url: {
            type: Sequilize.STRING,
            allowNull: false,
        },
        github_repository: {
            type: Sequilize.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: connection,
        modelName: 'project'
    }
);

module.exports = {
    Project
};