const {Film}=require('../../../db');

class Films{
    constructor(){}
   async verPeliculas(req,res){
        console.log(req.usuarioId)
        const films= await Film.findAll();
        res.json(films);
    }
    async guardarPelicula(req,res){
        const film= await Film.create(req.body);
        res.json(film);
    }
    async modificarPelicula(req,res){
        await Film.update(req.body,{
            where: {id: req.params.filmId}
        });
        res.json({success:'Se ha modificado'})
    }
    async eliminarPelicula(req,res){
        await Film.destroy({
            where:{id:req.params.filmId}
        });
        res.json({success:'Se ha borrado la pelicula'})
    }
}

module.exports= Films;