module.exports = function(app){
    app.actions = {};
    app.actions.parking = require('./parking')(app);
};