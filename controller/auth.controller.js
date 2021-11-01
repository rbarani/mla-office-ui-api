const auth = require('../model/auth.model');

exports.login = function (req, res) {
    const loginData = new Authentication(req.body);
    auth.login(loginData, (err, user) => {
        console(user);
        if (err)
            res.send(err);
            if(Object.keys(req.body).length === 0) {
                return res.status(400).json({message: 'Please enter the form data!'});
            }
        res.json({ status: true, message: 'Login', data: user })
    })
};