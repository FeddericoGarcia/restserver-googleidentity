const inputValidator = require('../middlewares/inputValidator');
const validateJWT = require('../middlewares/validateJWT');
const rolesValidator = require('../middlewares/rolesValidator');

module.exports = {
    ...inputValidator,
    ...validateJWT,
    ...rolesValidator,
}