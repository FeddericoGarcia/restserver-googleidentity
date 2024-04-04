const {response} = require('express');

const pathGet = (req, res = response) => {
    res.json({
        msg: 'GET OK - CONTROLLER'
    });
}
const pathPost = (req, res = response) => {
    const {nombre, apellido, edad} = req.body;

    res.json({
        msg: 'POST OK - CONTROLLER',
        nombre,
        apellido,
        edad
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

    res.json({
        msg: 'DELETE OK - CONTROLLER',
        id
    });
}


module.exports = {
    pathGet,
    pathPut,
    pathPatch,
    pathPost,
    pathDelete
}