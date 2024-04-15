const { Router } = require('express');
const { check } = require('express-validator');

const {pathGet, pathPatch, pathPut, pathPost, pathDelete} = require('../controllers/path-controller');
const { inputValidator } = require('../middlewares/input-validaror');
const { verifyRole, verifyEmail, verifyID } = require('../helpers/db-validators');

const router = Router();

router.get('/', [
    
], pathGet);

router.patch('/', pathPatch);

router.put('/:id', pathPut);

router.post('/',[
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password is required ( min 6 length )').isLength({ min: 6 }),
    check('email').custom( verifyEmail ),
    check('role').custom( verifyRole ),
    inputValidator
] , pathPost);

//TODO: TERMINAR LA VALIDACION DEL ID A ELIMINAR
router.delete('/:id',[
    check('id').custom( verifyID ),
    inputValidator
], pathDelete);

module.exports = router;
