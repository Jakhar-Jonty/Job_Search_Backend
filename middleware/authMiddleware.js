const jwt = require('jsonwebtoken');
const User = require('../model/NewUserModel');

exports.authenticate = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        console.log('No token, authorization denied');
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = await User.findById(decoded.id).select('-password');
        console.log("Verified");
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Token is not valid' });
    }
};
