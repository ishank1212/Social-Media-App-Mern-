const jwt = require('jsonwebtoken')
const User = require('../models/user')
const config = require('config')

const auth = async(req, res, next) =>
{
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }
        req.user = user;
        next()
    } catch (e) {
        res.status(401).send({error: "please authenticate!"})        
    }
}

module.exports = auth;