var sql = require('../config/db.config');


var auth = function (data) {

}


auth.login = function (users, result) {
    sql.query('SELECT * FROM users WHERE email = ? AND password = ?', users,
        function (err, res) {
            if (err) {
                result(err, null);
            } else {
                result(err, null);
            }
        }
    );
}

module.exports = auth;
