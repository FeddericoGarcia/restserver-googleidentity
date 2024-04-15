const Role = require('../models/role');
const User = require('../models/user');

const verifyRole = async ( role = '' ) =>{

    const roleExists = await Role.findOne({role});
    if (!roleExists){
        throw new Error(`This ${ role } is not valid, check it`);
    }

}

const verifyEmail = async ( email ) => {

    const isEmailValid = await User.findOne({email});
    if (isEmailValid) {
        throw new Error(`This ${ email } is not valid, check it`);
    };

}

//TODO: REALIZAR VERIFICACION SOBRE LA VALIDACION DEL ID A ELIMINAR
const verifyID = async ( id ) => {

    const isIDValid = await User.findOne({id});
    if (isIDValid) {
        throw new Error(`This ID ${ id } not exists, check it`);
    };

}

module.exports = {
    verifyRole,
    verifyEmail,
    verifyID
}