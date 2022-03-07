var express = require('express');
var router = express.Router();
const {Film}=require('../../db');
var film = require("./controllers/films");

const dato= new film();

router.get('/',async (req,res)=>{
    dato.verPeliculas(req,res);
});

router.post('/',async(req,res)=>{
    dato.guardarPelicula(req,res);
});

router.put('/:filmId', async (req,res)=>{
    dato.modificarPelicula(req,res);
})

router.delete('/:filmId',async (req,res)=>{
    dato.eliminarPelicula(req,res);
})


module.exports = router;