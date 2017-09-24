/**
 * Headers Hook that adds server name and powered by to request
 * @param Object sails app
 */
module.exports = function (sails) {
    return {
        initialize: function (next) {
            sails.emit('hook:headers:loaded');
            return next();
        },
        routes: {
            before: {
                'all /*': function (req, res, next) {
                    res.setHeader('X-Served-By', require('os').hostname());
                    res.setHeader('X-Powered-By', 'Smart Logistics Technology');
                    return next();
                }
            }
        }
    };
};