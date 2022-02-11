const products = require('../products');
//route controller for getting all prodcucts from DB
//uses sample projects right now
const getAll = async (req, res) => {
  res.status(200).json({ products });
};

module.exports = { getAll };
