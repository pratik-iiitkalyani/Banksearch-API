// Model

var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;
// Schema
var BanksearchSchema = new Schema({
	ifsc : {
		type : String
	},
	bank_id : {
		type : Number
	},
	bank : {
		type : String
	},
	branch : {
		type : String
	},
	address: {
		type : String
	},
	city:{ 
		type : String
	},
	state : {
		type : String
	},
	bank_name :{type : String}
})

// export bookstore model

const Banksearch = module.exports = Mongoose.model('banksearch', BanksearchSchema);

module.exports.get = function (callback, limit) {
    Banksearch.find(callback).limit(limit);
}


