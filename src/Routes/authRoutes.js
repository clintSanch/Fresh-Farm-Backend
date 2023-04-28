
import express from 'express';
import { signIn } from '../Controller/AuthController/loginController';
import { signUp } from '../Controller/AuthController/registerContoller';
const app = require('../../server');

const router = express.Router();

const authToken = app.token;

router.get('/signIn', signIn);
router.get('/signUp', signUp);

module.exports = {router}