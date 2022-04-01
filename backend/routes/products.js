const router = require('express').Router();
const products = require('../controllers/products');
const multer = require('multer');

//multer config
const storage = multer.memoryStorage();
const multipleUpload = multer({ storage: storage }).array('productImages');

router.get('/', products.getAll);
router.get('/:productId', products.getSingle);
router.post('/create', products.create);
router.post('/imageupload', multipleUpload, products.imageUpload);

module.exports = router;
