module.exports = {
  HOST: "ec2-34-242-89-204.eu-west-1.compute.amazonaws.com",
  PORT: 5432,
  USER: "revyxerwgpybui",
  PASSWORD: "4bba6a07cae5a0a76e22bc3c86ba51bb24487c43a319136375b1cbedf47ae94f",
  DB: "d9jchlvosrtftn",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};