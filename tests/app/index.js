const models = require('../../src/js/models');
const Table = require("cli-table3");
const _ = require("lodash-node");
const chalk = require("chalk");

const toTable =  (data, ...fields) => {
    let res = new Table( { head: fields.map( f => _.last(f.split("."))) } );
    data.forEach(item => {
        let d = [];
        fields.forEach( field => {
            d.push( _.get(item, field) || " ");
        });
        res.push(d);
    });
    return res.toString();
};


(async () => {
    const usersList = await models.User.findAll();
    console.log(chalk.green(`Users list`));
    console.log(toTable(usersList, "id", "email", "nickname"));

    const dataversesList = await models.Dataverse.findAll();
    console.log(chalk.green(`Dataverses List`));
    console.log(toTable(dataversesList, "id"));

    const access = await models.Dataverse.findAll({
        include: [{
            model: models.User,
            through: {
                attributes: ['role']
            }
        }]
    });
    console.log(chalk.green(`Access List`));

    console.log(access.map(dataverse => `Dataverse: #${dataverse.id}
${toTable(dataverse.User,"id","nickname", "Access.dataValues.role")}`).join("\n"));
})();