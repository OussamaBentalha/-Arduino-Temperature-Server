/**
 * Created by Sam on 06/04/2017.
 */
module.exports = function (app) {
    return function(req, res, next){
        var parking = new app.models.Parking({
            place: req.body.place,
            isFree: req.body.isFree
        });

        parking.save(function (err, instance) {
            if(err)
                return res.status(500).send(err);

            res.send(instance);
        });

    }
};