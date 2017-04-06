/**
 * Created by Sam on 06/04/2017.
 */
module.exports = function(app) {
    return function(req, res, next){
        app.models.Parking.findOneAndRemove({
            place: req.params.id
        }, function(err, result){
            if(err)
                return res.status(500).send(err);

            res.send(result);
        });
    }
};