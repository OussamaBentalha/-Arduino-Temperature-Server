/**
 * Created by Sam on 06/04/2017.
 */
module.exports = function(app){
    var ParkingSchema = app.mongoose.Schema({
        place: {
            type: Number,
            required: true
        },
        distance: {
            type: Number,
            required: true
        }
    });

    ParkingSchema.plugin(require('mongoose-timestamp'));

    var Parking = app.mongoose.model('Parking', ParkingSchema);
    return Parking;
};