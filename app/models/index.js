const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    operatorAliases: 0,

    pol: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
/*     dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    } */
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/user.model.js")(sequelize, Sequelize);
db.roles = require("../models/role.model.js")(sequelize, Sequelize);
db.lists = require("../models/list.model.js")(sequelize, Sequelize);
db.structs = require("../models/struct.model.js")(sequelize, Sequelize);
db.nodes = require("../models/node.model.js")(sequelize, Sequelize);
db.codes = require("../models/code.model.js")(sequelize, Sequelize);
db.logs = require("../models/log.modal.js")(sequelize, Sequelize);

// #region User Associations
db.users.belongsToMany(db.roles, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});
db.users.hasMany(db.lists);
// #endregion

// #region User Associations
db.roles.belongsToMany(db.users, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
// #endregion

// #region List Associations
db.lists.belongsTo(db.users, {
    foreignKey: {
        name: "userId",
        allowNull: false
    }
});
db.lists.hasOne(db.structs, {
    foreignKey: {
        allowNull: false,
    }
});
db.lists.hasOne(db.nodes, {
    foreignKey: {
        allowNull: false,
    }
});
db.lists.hasOne(db.codes, {
    foreignKey: {
        allowNull: false,
    }
});
// #endregion

// #region Struct Associations
db.structs.belongsTo(db.lists, {
    foreignKey: {
        name: "listId",
        allowNull: false
    }
});
// #endregion

// #region Node Associations
db.nodes.belongsTo(db.lists, {
    foreignKey: {
        name: "listId",
        allowNull: false
    }
});
// #endregion

// #region Code Associations
db.codes.belongsTo(db.lists, {
    foreignKey: {
        name: "listId",
        allowNull: false
    }
});
db.codes.hasMany(db.logs, {
    foreignKey: {
        allowNull: false,
    }
});
// #endregion

// #region Log Associations
db.logs.belongsTo(db.codes, {
    foreignKey: {
        name: "codeId",
        allowNull: false
    }
});
// #endregion

db.ROLES = ["guest", "user", "admin"];

module.exports = db;
