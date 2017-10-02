/*
* Create on 03/10/2017
* Counters model
*/

module.exports = {
    attributes: {
        _id: { type: 'string'},
        seq: { type: 'integer'},
        toJSON: function() {
            var obj = this.toObject();
            return obj;
        }
    }
};