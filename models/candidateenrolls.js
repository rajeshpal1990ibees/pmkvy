var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    TrainingType: {type: String},
    TCState:{type: String},
    TCDistrict:{type: String},
    Sectorname:{type: String},
    PartnerID:{type: String},
    SCCentreID:{type: String}
});
module.exports = mongoose.model('Candidateenrolls', UserSchema);