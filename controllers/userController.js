const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');



exports.register = async (req, res) => {
    try {
        const { typeofMember, username, email, password, mobile, image, address1, address2 } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            typeofMember,
            username,
            email,
            password: hashedPassword,
            mobile,
            image,
            address1,
            address2
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', data: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ userId: user._id }, 'Parteek@2611', { expiresIn: '365d' });

        res.status(200).json({ status: 200, message: "Login sucessfully", data: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
