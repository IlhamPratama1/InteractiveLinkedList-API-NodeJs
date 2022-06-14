module.exports = {
  HOST: "localhost",
  PORT: process.env.NODE_ENV === 'development' ? 1343 : 5432,
  USER: "postgres",
  PASSWORD: "Ilham11pratama",
  DB: "interactive_linkedlist",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0
  }
};