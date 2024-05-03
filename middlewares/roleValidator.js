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

module.exports = {
    roleValid
}