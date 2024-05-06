const user = require("../models/user");

const roleValid = ( req, res, next ) =>{

    if ( !req.user ) {
        return res.status(500).json({
            msg: `Validate role before token`
        });
    };

    const { role, name } = req.user;
    
    if ( role !== 'ADMIN' ) {
        return res.status(401).json({
            msg: `The user ${ name.toUpperCase() } must be ADMIN role`
        });
    }
    
    next();

};

const haveRole = ( ...roles ) =>{

    return ( req, res, next ) =>{

        if ( !req.user ) {
            return res.status(500).json({
                msg: `Validate role before token`
            });
        };

        if ( !roles.includes( req.user.role )){
            return res.status(401).json({
                msg: `The user must have an '${ roles }' role`
            })
        }

        next();
    }

}

module.exports = {
    roleValid,
    haveRole
}