module.exports = {
    port: process.env.PORT || 8080,

    /***********
     * LOCALHOST
     ************/
    //db: 'mongodb://localhost:27017/parking-server',

    /***********
     * MONGOLAB
     ************/
    db: 'mongodb://admin:admin@ds145750.mlab.com:45750/parking-server',

    sessionTTL: 2 * 24 * 60 * 60
};
