module.exports = (sequelize, Sequelize) => {
    const Code = sequelize.define("codes", {
        data: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    return Code;
}