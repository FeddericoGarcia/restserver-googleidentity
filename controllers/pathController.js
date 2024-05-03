const encrypt = require('../helpers/encrypt');

const User = require('../models/user');

const pathGet = async ( req, res ) => {

    const { limit = 5, from = 0, state = true} = req.query;
    const [ total_docs, users] = await Promise.all([
        User.countDocuments({state}),
        User.find({state})
            .skip( Number(from) )
            .limit( Number(limit) )
    ]);

    res.json({
        total_docs,
        users
    });
}

const pathPost = async ( req, res ) => {

    const {name, password, email, role, state, google} = req.body;
    const user = new User({name, password, email, role, state, google});

    user.password = encrypt(user.password);

    await user.save(); 

    res.json({
        user
    });
}

const pathPut = async ( req, res ) => {

    const { id } = req.params;
    const { password, google, ...resto } = req.body;

    if ( password ) {
        resto.password = encrypt(password);
    }

    const user = await User.findByIdAndUpdate(id, resto);
    
    res.json({
        user
    });
}

const pathPatch = ( req, res ) => {
    
    const body = req.body;

    res.json({
        body
    });
}

const pathDelete = async ( req, res ) => {
    
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { state: false});
    
    res.json({
        msg: 'User has been deleted',
        user
    });
}
 

module.exports = {
    pathGet,
    pathPut,
    pathPatch,
    pathPost,
    pathDelete
}