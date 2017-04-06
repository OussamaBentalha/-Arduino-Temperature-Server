module.exports = function(app){
    app.use('/api/parking', require('./parking')(app));
};