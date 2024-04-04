const {response} = require('express');

const pathGet = (req, res = response) => {
    res.json({
        msg: 'GET OK - CONTROLLER'
    });
}
const pathPatch = (req, res = response) => {
    res.json({
        msg: 'PATCH OK - CONTROLLER'
    });
}
const pathPut = (req, res = response) => {
    res.json({
        msg: 'PUT OK - CONTROLLER'
    });
}
const pathPost = (req, res = response) => {
    res.json({
        msg: 'POST OK - CONTROLLER'
    });
}
const pathDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE OK - CONTROLLER'
    });
}


module.exports = {
    pathGet,
    pathPut,
    pathPatch,
    pathPost,
    pathDelete
}