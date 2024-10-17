const newUser = require('../model/NewUserModel')
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !name || !password) {
        return res.status(400).json({ msg: 'All fields are required' });
    }

    try {
        // Encrypt password
        const encryptPassword = await bcrypt.hash(password, 10);

        const user = new newUser({ name, email, password: encryptPassword });

        await user.save();
        res.status(200).json({ msg: 'User registered successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

module.exports = registerUser;
