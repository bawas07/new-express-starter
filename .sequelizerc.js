const path = require('path')

    module.exports = {
    "config": path.resolve('./src/database/config', 'config.json'),
    "models-path": path.resolve('./src/database/models'),
    "seeders-path": path.resolve('./src/database/seeders'),
    "migrations-path": path.resolve('./src/database/migrations')
};