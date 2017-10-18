/*
* create on 22/09/2017
*/

module.exports = {
    
    models: {
        connection: 'devMongodbServer'
    },
    port: process.env.PORT || 80,
    host: "core.sltcorp.vn",
    application_auth: {
        enableLocalAuth: true
    },
    log: {
        level: "info"
    }
};
