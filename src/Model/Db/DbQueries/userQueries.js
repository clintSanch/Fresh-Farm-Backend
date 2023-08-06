const pool = require('../pool');
/**
 * callbacks
 * async/await
 * promises
 */

class AuthModel {

    login = (data, (result, err) => {

        let email = data.email;
        let password = data.password;
        let username = data.username;
    })

    register = (data, (result, err) => {
        
    })
}

module.exports = AuthModel;