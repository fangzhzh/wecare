/**
 * Created by zhenfangzhang on 30/10/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ActivitySchema = new Schema({
    userId: Number,
    dataTime:Date,
    createTime: { type: Date, default: Date.now },
    steps: Number,
    distance: Number,
    activity: Number
});

var Activity = mongoose.model('activity', ActivitySchema);

// make this available to our users in our Node applications
module.exports = Activity;
