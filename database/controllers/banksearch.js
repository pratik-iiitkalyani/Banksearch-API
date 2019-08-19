// bookstoreController.js

// Import banksearch model
const Banksearch = require('../models/banksearch');

// Handle create actions
exports.create = function(data) {
    return new Promise(async function(resolve, reject) {
        // console.log("@2222222222", data )
        let banksearch = new Banksearch(data);
        const response = await banksearch.save()
        resolve(response)

    });

}

var limit = 4
var offset = 0

// Handle view contact info
exports.getBranch = function(query) {
    return new Promise(function (resolve, reject) {
        // var limit = query.limit;
        // var offset = query.offset;

        // console.log("data", query);
        let res = Banksearch.find({"branch":query.q}).sort({ifsc:1}).limit(1);
        // console.log("@@@@@@@@@@@", res)
            res.exec(function(err, res) {
            if (err) {
                reject(err);
            }
            resolve({branches: res.slice(offset, limit + offset)});
        })
    })
}


// Handle view contact info
exports.getBranch1 = function(query) {
    return new Promise(function (resolve, reject) {
        // var limit = query.limit;
        // var offset = query.offset;

        // console.log("data", query);
        let res = Banksearch.find({"branch":query.q}).sort({ifsc:1}).limit(1);
        // console.log("@@@@@@@@@@@", res)
            res.exec(function(err, res) {
            if (err) {
                reject(err);
            }
            resolve({branches: res.slice(offset, limit + offset)});
        })
    })
}