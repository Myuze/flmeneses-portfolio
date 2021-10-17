const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class App extends Model {}

App.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    app_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    app_img_URL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    app_link_URL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    app_repo_URL: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_main: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'app'
  }
);

module.exports = App;
