module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Ilham11pratama",
    DB: "interactive_linkedlist",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};