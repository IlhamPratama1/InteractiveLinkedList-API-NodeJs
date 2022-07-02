const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    operatorAliases: 0,

    pol: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min
    }
    /* dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    } */
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.roles = require("./role.model.js")(sequelize, Sequelize);
db.lists = require("./list.model.js")(sequelize, Sequelize);
db.structs = require("./struct.model.js")(sequelize, Sequelize);
db.nodes = require("./node.model.js")(sequelize, Sequelize);
db.codes = require("./code.model.js")(sequelize, Sequelize);
db.logs = require("./log.model.js")(sequelize, Sequelize);
db.operations = require("./operation.model.js")(sequelize, Sequelize);
db.searchLogs = require("./searchLog.model.js")(sequelize, Sequelize);
db.quests = require("./quest.model.js")(sequelize, Sequelize);
db.userQuests = require("./userQuest.model.js")(sequelize, Sequelize);
db.feedbacks = require('./feedback.model')(sequelize, Sequelize);
db.userFeedbacks = require('./userFeedback.model')(sequelize, Sequelize);
db.questions = require('./question.model')(sequelize, Sequelize);
db.answers = require('./answer.model')(sequelize, Sequelize);
db.userQuizzes = require('./userQuiz.model')(sequelize, Sequelize);

// #region User Associations
db.users.belongsToMany(db.roles, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});
db.users.hasMany(db.lists);
db.users.hasMany(db.userQuests);
db.users.hasMany(db.userFeedbacks);
db.users.hasMany(db.userQuizzes);
// #endregion

// #region Roles Associations
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
db.codes.hasOne(db.logs, {
    foreignKey: {
        allowNull: false,
    }
});
db.codes.hasOne(db.operations, {
    foreignKey: {
        allowNull: false,
    }
});
db.codes.hasOne(db.searchLogs, {
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

// #region operations Associations
db.operations.belongsTo(db.codes, {
    foreignKey: {
        name: "codeId",
        allowNull: false
    }
});
// #endregion

// #region searchLog Associations
db.searchLogs.belongsTo(db.codes, {
    foreignKey: {
        name: "codeId",
        allowNull: false
    }
});
// #endregion

// #region Quest Associations
db.quests.hasMany(db.userQuests);
db.userQuests.belongsTo(db.users, {
    foreignKey: {
        name: "userId",
        allowNull: false
    }
});
db.userQuests.belongsTo(db.quests, {
    foreignKey: {
        name: "questId",
        allowNull: false
    }
});
// #endregion

// #region UserFeedback
db.feedbacks.hasMany(db.userFeedbacks);
db.userFeedbacks.belongsTo(db.feedbacks,  {
    foreignKey: {
        name: "feedbackId",
        allowNull: false
    }
});
db.userFeedbacks.belongsTo(db.users, {
    foreignKey: {
        name: "userId",
        allowNull: false
    }
});
// #endregion

// #region
db.userQuizzes.belongsTo(db.users,  {
    foreignKey: {
        name: "userId",
        allowNull: false
    }
});
db.userQuizzes.belongsToMany(db.questions, {
    through: "userQuiz_questions",
    foreignKey: "quizId",
    otherKey: "questionId"
});
db.questions.belongsToMany(db.userQuizzes, {
    through: "userQuiz_questions",
    foreignKey: "questionId",
    otherKey: "quizId"
});
db.questions.belongsToMany(db.answers, {
    through: 'question_answers',
    foreignKey: "questionId",
    otherKey: "answerId"
});
db.answers.belongsToMany(db.questions, {
    through: 'question_answers',
    foreignKey: "answerId",
    otherKey: "questionId"
});
// #endregion

db.ROLES = ["guest", "user", "admin"];

module.exports = db;
