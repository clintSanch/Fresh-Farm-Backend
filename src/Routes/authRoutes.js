
const { Router } = require('express');
const express = require('express');
const signIn = require('/Controller/AuthController/loginController');
const signUp = require('/Controller/AuthController/registerController');

const router = Router.express();

router.get('/signIn', signIn);
router.get('/signUp', signUp);

module.exports = router;