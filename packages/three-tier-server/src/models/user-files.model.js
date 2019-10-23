// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const usersModel = require('./users.model');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const userFiles = sequelizeClient.define('user_files', {
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    fileName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    fileURL: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileDescription: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  userFiles.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    console.log(models);
    models.users.hasMany(userFiles, {as:'userId',foreignKey:'userId', sourceKey: 'id'});
   // userFiles.hasOne(models.users, {as:'userId',foreignKey:'userId', sourceKey: 'id'});

  };

  return userFiles;
};
