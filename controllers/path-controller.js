const {response} = require('express');
const bcryptjs = require('bcryptjs');
const { verifyEmail } = require('../helpers/db-validators');

const User = require('../models/user');

const pathGet = (req, res = response) => {

    res.json({
        msg: 'GET OK - CONTROLLER'
    });
}

const pathPost = async (req, res = response) => {

    const {name, password, email, role, state, google} = req.body;
    const user = new User({name, password, email, role, state, google});

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save(); 

    res.json({
        msg: 'POST OK - CONTROLLER',
        user
    });
}

const pathPut = (req, res = response) => {
    const {id} = req.params;
    
    res.json({
        msg: 'PUT OK - CONTROLLER',
        id
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
    console.log('DELETE', id);
    const user = new User.findOne({id});
    if (user.isValidID){
        user.remove();
    }
    
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