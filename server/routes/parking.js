/**
 * Created by Sam on 06/04/2017.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){
    router.post('/',
        bodyparser,
        app.actions.parking.create
    );

    router.get('/',
        app.actions.parking.list
    );

    router.get('/:id',
        app.actions.parking.show
    );

    router.put('/:id',
        bodyparser,
        app.actions.parking.update
    );

    router.delete('/:id',
        app.actions.parking.remove
    );

    return router;
};