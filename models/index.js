const App = require('./App');
const User = require('./User');
const UserApp = require('./UserApp');

User.belongsToMany(App, {
  through: {
    model: UserApp,
    unique: false
  }
});

App.belongsToMany(User, {
  through: {
    model: UserApp,
    unique: false
  }
});

module.exports = {
  User,
  App,
  UserApp
};
