/**
 * Created by Sam on 06/04/2017.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        show: require('./show')(app),
        list: require('./list')(app),
        update: require('./update')(app)
    }
}