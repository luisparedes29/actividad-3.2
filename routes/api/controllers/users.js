const bcrypt = require('bcryptjs');
const { User } = require('../../../db');
const { check, validationResult } = require('express-validator')
const moment = require('moment');
const jwt = require('jwt-simple');

class Usuarios{
    constructor(){}
  async  registro(req,res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
    }
    async login(req,res,createToken){
        const user = await User.findOne({ where: { email: req.body.email } })
        if (user) {
            const iguales = bcrypt.compareSync(req.body.password, user.password);
            if (iguales) {
                res.json({ success: createToken(user) });
            } else {
                res.json({ error: 'Error en usuario y/o contraseña' })
            }
        } else {
            res.json({ error: 'Error en usuario y/o contraseña' })
        }
    }
}

module.exports= Usuarios;