/*
* create 22/09/2017
*/
module.exports = {
    
    models: {
        connection: 'prodMongodbServer'
    },
    port: process.env.PORT || 80,
    host: "core.sltcorp.vn",
    log: {
        level: "silent"
    }
};
