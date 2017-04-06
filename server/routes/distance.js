/**
 * Created by Sam on 06/04/2017.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
    router.post('/',
        bodyparser,
        app.actions.distance.create
    );

    router.get('/',
        app.actions.distance.list
    );

    router.get('/:id',
        app.actions.distance.show
    );

    return router;
};