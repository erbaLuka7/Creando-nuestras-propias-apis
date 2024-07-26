const db = require('../../database/models');
const Op = db.sequelize.Op;
/* JSON de movie para agregar desde postman
{
    "title": "Luka Movie",
    "rating": 10.0,
    "awards": 7,
    "release_date": "2024-07-26T00:00:00Z"
} 
    */
module.exports = {
    'create': (req, res) => {
        db.Movie.create(req.body)
        .then(movie => {
            return res.json({
                data: movie,
                status: 200
            })
        })
    },
    'delete': (req, res) => {
        db.Movie.destroy({
            where: {id: req.params.id}
        })
        .then(movie => {
            res.json('la pelicula se elimino correctamente')
        })
    }
}

