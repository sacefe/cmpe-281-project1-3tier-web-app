// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
//const userFiles = require('./user-files.model');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {

    userFirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userLastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    googleId: {
      type: Sequelize.STRING
    },

    facebookId: {
      type: Sequelize.STRING
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    console.log(models);
    //models.user_files.belongsTo(users, {foreignKey: 'id', targetKey: 'userId'})
   // users.belongsTo(models.user_files, {foreignKey: 'userId', targetKey: 'id'})
    models.user_files.belongsTo(models.users, {foreignKey:'userId', sourceKey: 'id'});
  };

  return users;
};
