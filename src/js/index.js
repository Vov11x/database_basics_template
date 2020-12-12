const models = require('./models');

const userMapper = (user) => {
    console.log(user.id + ' | ' + user.nickname + ' | ' + user.email + ' | ' + user.role);
};

const dataverseMapper = (dataverse) => {
    console.log('#' + dataverse.id);
};


(async () => {
    console.log('--------');
    console.log('Users list');
    console.log('--------');
    const usersList = await models.User.findAll();
    usersList.map(userMapper);


    console.log('\n--------');
    console.log('Dataverses List');
    console.log('--------');
    const dataversesList = (await models.Dataverse.findAll());
    dataversesList.map(dataverseMapper);

    console.log('\n\n--------');
    console.log('Access');
    console.log('--------');
    const dataverses = await models.Dataverse.findAll({
        include: [{
            model: models.User,
            through: {
                attributes: ['role']
            }
        }]
    });
    dataverses.map(dataverse => {
        console.log('#' + dataverse.id);
        Dataverse.User.map(user => {
            console.log(user.id + ' | ' + user.nickname + ' | ' + user.Access.dataValues.role);
        });
    })
})();
