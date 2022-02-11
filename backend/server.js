const express = require('express');
const server = express();
const cors = require('cors');

//this is so incoming requests get parsed as json
//common to do
//easier to handle code wise
server.use(express.json());

//to handle CSRF (cross site request forgerery)
server.use(cors());

const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');

server.use('/api/auth', authRouter);
server.use('/api/products', productsRouter);

server.listen('8000', () => console.log('Server started...'));
