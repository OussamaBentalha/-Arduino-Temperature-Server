module.exports = function(app){
    app.use('/api/distance', require('./distance')(app));
};