const db = require('../../database/models');
const Op = db.sequelize.Op;

module.exports = {
    'list': (req, res) => {
        db.Genre.findAll()
         .then(genres => {
            return res.json({
                total: genres.length,
                data: genres,
                status: 200
            })
        })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
        .then(genre => {
            return res.json({
                data: genre,
                status:200
            });
        });
    }
}
