const products = require('../sampleProducts');

//DB model
const Product = require('../models/Product');
const uploadToS3 = require('../uploadToS3');

//route controller for getting all prodcucts from DB
//uses sample projects right now
const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

//gets single product from DB based on ID
const getSingle = async (req, res) => {
  try {
    const productId = req.params.productId;

    const product = await Product.findById(productId);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).send('Server error');
  }
};

//creates new product with request data
const create = async (req, res) => {
  console.log(req.body);
  try {
    const { title, description, price, condition, stock, imageUrls } = req.body;

    const newProduct = new Product({
      title: title,
      description: description,
      price: price,
      condition: condition,
      stock: stock,
    });

    //pushes the imagesUrls in request to the Product images array
    if (imageUrls.length) {
      for (var i = 0; i < imageUrls.length; i++) {
        newProduct.images.push(imageUrls[i]);
      }
    }

    const savedProduct = await newProduct.save();
    return res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

//uploads images to S3 bucket and
//returns the location URLs
const imageUpload = async (req, res) => {
  const files = req.files;

  const urls = [];
  try {
    console.log(files);

    for (var i = 0; i < files.length; i++) {
      const uploadedFile = await uploadToS3(files[i]);
      urls.push(uploadedFile.Location);
    }

    res.status(200).json(urls);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports = { getAll, getSingle, create, imageUpload };
