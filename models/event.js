'ust strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventName: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    priority: DataTypes.CHAR(3),
    lastDate: DataTypes.DATEONLY,
    nextDue: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN,
     }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};