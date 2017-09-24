/**
 * Connections
 * (sails.config.connections)
 */

module.exports.connections = {
    
    /***************************************************************************
    *                                                                          *
    * Local disk storage for DEVELOPMENT ONLY                                  *
    *                                                                          *
    * Installed by default.                                                    *
    *                                                                          *
    ***************************************************************************/
    localDiskDb: {
        adapter: 'sails-disk'
    },

    /***************************************************************************
    *                                                                          *
    * MongoDB is the leading NoSQL database.                                   *
    * http://en.wikipedia.org/wiki/MongoDB                                     *
    *                                                                          *
    * Run: npm install sails-mongo                                             *
    *                                                                          *
    ***************************************************************************/
    localMongodbServer: {
        adapter: 'sails-mongo',
        host: 'localhost',
        port: 27017,
        user: '', 
        password: '', 
        database: 'localVRPSystem' 
    },

    devMongodbServer: {
        adapter: 'sails-mongo',
        host: 'admin@sltcorp.vn',
        port: 39017,
        user: 'admin', 
        password: 'SOh3TbYhx8ypJPxmt1oOfL', 
        database: 'devVRPSystem' 
    },

    stgMongodbServer: {
        adapter: 'sails-mongo',
        host: 'admin@sltcorp.vn',
        port: 39017,
        user: 'admin', 
        password: 'SOh3TbYhx8ypJPxmt1oOfL', 
        database: 'stgVRPSystem' 
    },

    prodMongodbServer: {
        adapter: 'sails-mongo',
        host: 'admin@sltcorp.vn',
        port: 39017,
        user: 'admin', 
        password: 'SOh3TbYhx8ypJPxmt1oOfL', 
        database: 'proVRPSystem' 
    }
    
};
    