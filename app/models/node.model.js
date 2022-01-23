module.exports = (sequelize, Sequelize) => {
    const Node = sequelize.define("nodes", {
        data: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    return Node;
}