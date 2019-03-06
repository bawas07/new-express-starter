'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        timestamps: true,
        paranoid: true
    });
    user.associate = function(models) {
    // associations can be defined here
    };
    return user;
};