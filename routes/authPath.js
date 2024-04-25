const { Router } = require('express');
const { check } = require('express-validator');

const { inputValidator } = require('../middlewares/input-validator');
const { pathPost } = require('../controllers/authPath-controller');
const { verifyEmail } = require('../helpers/validators');

const router = Router();

router.post('/login',[
    check('email', 'The email is required').isEmail(),
    check('password', 'The password is required').not().isEmpty(),
    check('password', 'Password may be longer ( min 6 length )').isLength({ min: 6 }),
    inputValidator
], pathPost);

module.exports = router;