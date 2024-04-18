const {response} = require('express');
// const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const encrypt = require('../helpers/encrypt');
const user = require('../models/user');

const pathGet = (req, res = response) => {

    res.json({
        msg: 'GET OK - CONTROLLER'
    });
}

const pathPost = async (req, res = response) => {

    const {name, password, email, role, state, google} = req.body;
    const user = new User({name, password, email, role, state, google});

    // const newPass = encrypt(user.password);
    user.password = encrypt(user.password);

    await user.save(); 

    res.json({
        msg: 'POST OK - CONTROLLER',
        user
    });
}

const pathPut = async (req, res = response) => {
    const { id } = req.params;
    const { password, google, ...resto } = req.body;

    if ( password ) {
        resto.password = encrypt(password);
    }

    const user = await User.findByIdAndUpdate(id, resto);
    
    res.json({
        msg: 'PUT OK - CONTROLLER',
        user
    });
}

const pathPatch = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'PATCH OK - CONTROLLER',
        body
    });
}

const pathDelete = (req, res = response) => {
    
    const {id} = req.params;

    const user = User.findOne(id) ? user.remove() : '';
    // if (user){
    //     user.remove();
    // }
    
    res.json({
        msg: 'DELETE OK - CONTROLLER',
        id,
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