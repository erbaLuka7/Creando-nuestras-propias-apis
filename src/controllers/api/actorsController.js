const db = require('../../database/models');
const Op = db.sequelize.Op;
/* JSON de actor para agregar desde postman
{ 
    "first_name": "Luka",
    "last_name": "Erba",
    "rating": "7.5",
    "favorite_movie_id": 1
} 
    */
module.exports = {
    'list': (req, res) => {
        db.Actor.findAll()
         .then(Actors => {
            return res.json({
                total: Actors.length,
                data: Actors,
                status: 200
            })
        })
    },
    'detail': (req, res) => {
        db.Actor.findByPk(req.params.id)
        .then(Actors => {
            return res.json({
                data: Actors,
                status:200
            });
        });
    },
    'create': (req, res) => {
        db.Actor.create(req.body)
        .then(Actors => {
            return res.json({
                data: Actors,
                status: 200
            })
        })
    },
    'delete': (req, res) => {
        db.Actor.destroy({
            where: {id: req.params.id}
        })
        .then(actor => {
            res.json('el actor se elimino correctamente')
        })
    }
}