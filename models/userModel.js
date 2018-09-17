var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    SchemeComponent: {type: String},
    TrainingType:{type: String},
    TCState: {type:String},
    TCDistrict:{ type:String},
    TCConstituency:{type:String},
    SectorID:{type:String},
    Sectorname:{type:String}
});
module.exports = mongoose.model('Candidatedetails', UserSchema);