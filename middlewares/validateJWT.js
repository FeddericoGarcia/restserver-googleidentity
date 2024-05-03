const jwt = require('jsonwebtoken');

const User = require('../models/user');


const validateJWT = async ( req, res, next ) =>{

    try {

        const token = req.header('x-token');
        if ( !token ) {
            return res.status(401).json({
                msg: 'There is no token in the request'
            });
        }
        
        const { uid } = jwt.verify( token, process.env.SECRET_JWT_SEED );
        const userValidated = await User.findById( uid );
        if( !userValidated ){
            res.status(401).json({
                msg: 'There is no token in the request - The user does not exists'
            });
        }

        if( !userValidated.state ){
            res.status(401).json({
                msg: 'There is no token in the request - The user state is not valid'
            });
        }
        
        req.user = userValidated;

        next();
        
    } catch ( error ) {

        console.log( error );
        res.status(500).json({
            msg: 'There was a problem validating the token'
        });

    }
}

module.exports = {
    validateJWT
}
