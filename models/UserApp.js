const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserApp extends Model {}

UserApp.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user_id',
        key: 'id'
      },
    },
    app_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'app',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_app'
  }
);

module.exports = UserApp;
