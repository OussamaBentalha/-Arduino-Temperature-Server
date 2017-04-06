/**
 * Created by Sam on 06/04/2017.
 */
module.exports = function(app) {
    return function(req, res){
        app.models.Parking.find({place: req.params.id}, function(err, instance){

            if (err)
                return res.status(500).send(instance);

            res.send(instance);
        })
    }
};