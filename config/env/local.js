/*
* create on 22/09/2017
*/

module.exports = {
    /*database config */
    db: {
        type    : "mongodb",
        server  : "localhost:27017",
        name    : "localVRPSystem",
        options: {
            w: 1
        },
        query_logging: false,
        authentication: {
            un: null,
            pw: null,
            options: {
            }
        },
    },

    /*http config*/
    http:{
        host: "localhost",
        port: 80
    },

    /*session config*/
    session:{
        cookieName    : "sltcore",
        secret        : "SLT secret",
        duration      : 30 * 60 * 1000,
        activeDuration: 30 * 60 * 1000,
        cookie        :{
            path      : "/",
            maxAge    : 1800000,
            httpOnly  : true,
            secure    : false,
            ephemeral : false
        }
    },

    /*format*/
    format:{
        dateFront    : "dd-MM-YYYY",
        dateOracle   : "YYYY-MM-dd",
        time         : "24"
    }
    
};
