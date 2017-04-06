module.exports = function(app){
    app.actions = {};
    app.actions.distance = require('./distance')(app);
};