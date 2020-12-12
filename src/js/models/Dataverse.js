const connection = require('../connection');
const Sequilize = require('sequelize');

const Model = Sequilize.Model;

class Dataverse extends Model {}
Dataverse.init(
    {
        id: {
            type: Sequilize.INTEGER,
            field: 'id',
            primaryKey: true
        }
    },
    {
        sequelize: connection,
        modelName: 'Dataverse'
    }
);

module.exports = {
    Dataverse
};