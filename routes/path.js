const { Router } = require('express');
const {pathGet, pathPatch, pathPut, pathPost, pathDelete} = require('../controllers/path-controller');

const router = Router();

router.get('/', pathGet);
router.patch('/', pathPatch);
router.put('/:id', pathPut);
router.post('/', pathPost);
router.delete('/:id', pathDelete);

module.exports = router;
