/**
 * create at 08/10/2017
 * @author Yen Truong
 */

module.exports = {
    adapter: 'mongo',
    attributes: {
        _id: { type: 'integer', autoIncrement: true, primaryKey: true, unique: true},
        session: { type: 'string'},
        expires: { type: 'date', default: Date.now},
        /*username: { type: 'string', index: true, unique: true},
        email: { type: 'string', unique: true, required: true, contains: '@'},
        create_date:  { type: 'date', default: Date.now},*/

        toJSON: function() {
            var obj = this.toObject();
            return obj;
        }
    }
}