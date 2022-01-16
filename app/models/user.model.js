module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    }, {
        instanceMethods: {
            toJSON: function () {
                var values = Object.assign({}, this.get());
                delete values.password;
                return values;
            }
        }
    });
    
    return User;
};