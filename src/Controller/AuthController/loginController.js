const authModel = require('../../Model/Db/DbQueries/userQueries');

const signIn = async (req, res, next) => {
    return res.send("sign-in", {})
}

module.exports = {signIn}