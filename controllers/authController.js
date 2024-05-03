
const bcryptjs = require('bcryptjs');

const generateJWT = require('../helpers/generateJWT');

const User = require('../models/user');

const pathPost = async ( req, res ) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        if ( !user ) {
            return res.status(400).json({
                msg: 'Invalid credentials - email or password - EMAIL'
            });
        }

        const validPassword = await bcryptjs.compare( password, user.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Invalid credentials - email or password - PASS'
            });
        }

        const token = await generateJWT( user.id );
        
        res.json({
            token,
            email,
            password
        });

    } catch (error) {

        console.log( error );
        res.status(500).json({
            msg: 'POST-CONTROLLER / LOGIN ERROR'
        });

    }
}

module.exports = {
    pathPost
}