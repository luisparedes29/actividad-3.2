var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { check, validationResult } = require('express-validator')
const moment = require('moment');
const jwt = require('jwt-simple');
var usuario = require("./controllers/users");

const dato= new usuario();

router.post('/register', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email debe estar correcto').isEmail()

], async (req, res) => {
    dato.registro(req,res);
});

router.post('/login', async (req, res) => {
    dato.login(req,res,createToken);
})

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createAt: moment().unix(),
        expiredAt: moment().add(20, 'minutes').unix()
    }

    return jwt.encode(payload, 'frase secreta');
}

module.exports = router;