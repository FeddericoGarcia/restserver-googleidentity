const { Router } = require('express');
const {pathGet, pathPatch, pathPut, pathPost, pathDelete} = require('../controllers/path.controller');

const router = Router();

router.get('/', pathGet);
router.patch('/', pathPatch);
router.put('/', pathPut);
router.post('/', pathPost);
router.delete('/', pathDelete);

module.exports = router;
