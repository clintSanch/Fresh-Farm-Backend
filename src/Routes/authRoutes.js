
import express from 'express';
const signIn = require('../Controller/AuthController/loginController');
const signUp = require('../Controller/AuthController/registerContoller');
const products = require('../Controller/ProductsController/productController');
const homePage = require('../Controller/HomepageController/homeController');
const asyncHandler = require('express-async-handler');

import { app } from '../../server';

const router = express.Router();

//const authToken = app.token;

/**
 * Handling exceptions in route functions with
 * trycatch block as well as asyncHandler(express-async-handler) options in routes
 * 
 * 
 * The express-async-handler  hides the try...catch block and the code to forward the error
 */

router.get('/home', async(req, res, next) =>{
    try {
        const successfullResult = await homePage;
        res.status().render()
    } catch (error) {
        return next(error)
    }
});

router.get('/signIn', async (req, res, next) => {
    try {
        const successfullResult = await signIn;
        res.render();
    } catch (error) {
        return next(error);
    }
});

router.get('/signUp', asyncHandler(async (req, res, next) => {
    const successfullResult = await signUp;
    res.render();
}));

router.get('/product', async (req, res, next) => {
    try {
        const successfullResult = await products;
        res.render()
    } catch (error) {
        return next(error)
    }
});

module.exports = { router }