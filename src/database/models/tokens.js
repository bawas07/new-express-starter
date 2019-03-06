'use strict';
module.exports = (sequelize, DataTypes) => {
    const tokens = sequelize.define('tokens', {
        user_id: DataTypes.INTEGER,
        token: DataTypes.STRING
    }, {});
    tokens.associate = function(models) {
    // associations can be defined here
    };
    return tokens;
};