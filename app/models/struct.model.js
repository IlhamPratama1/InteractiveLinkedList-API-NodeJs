module.exports = (sequelize, Sequelize) => {
    const Struct = sequelize.define("structs", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        data: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Struct;
}