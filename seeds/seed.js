const sequelize = require('../config/connection');
const { User, App, UserApp } = require('../models');

const userData = require('./userData.json');
const appData = require('./appData.json');
const userAppData = require('./userAppData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await App.bulkCreate(appData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await UserApp.bulkCreate(userAppData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
