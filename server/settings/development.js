module.exports = {
    port: process.env.PORT || 8080,

    /***********
     * LOCALHOST
     ************/
    //db: 'mongodb://localhost:27017/parking-server',

    /***********
     * MONGOLAB
     ************/
    db: 'mongodb://arduino:arduinoServer@ds151060.mlab.com:51060/arduinotemperature',

    sessionTTL: 2 * 24 * 60 * 60
};
