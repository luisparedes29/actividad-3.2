var express = require('express');
var router = express.Router();

const middleware = require('./middlewares');
const apiFilmsRouter=require('./api/films');
const apiUsersRouter=require('./api/users')

router.use('/films',middleware.checkToken,apiFilmsRouter);
router.use('/users',apiUsersRouter);



module.exports = router;
