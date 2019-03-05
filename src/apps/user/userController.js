const controller = {
    get: (req, res) => {
        return res.json({
            name: 'user 1',
            password: 'we cant tell you, it\'s a secret'
        });
    }
};

module.exports = controller;