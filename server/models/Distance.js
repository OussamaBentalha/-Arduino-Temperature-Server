/**
 * Created by Sam on 06/04/2017.
 */
module.exports = function(app){
    var DistanceSchema = app.mongoose.Schema({
        distance: {
            type: Number,
            required: true
        }
    });

    DistanceSchema.plugin(require('mongoose-timestamp'));

    var Distance = app.mongoose.model('Temperature', DistanceSchema);
    return Distance;
};