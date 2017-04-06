/**
 * Created by Sam on 06/04/2017.
 */
module.exports = function(app){
    return function(req, res, next){
        var inputs = req.body;

        app.models.Parking.update({
            place: req.params.id
        }, inputs, function(err, instance){

            if(err)
                return res.status(500).send(err);

            res.send(instance);
        })
    }
};