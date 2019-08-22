// bookstoreController.js

// Import banksearch model
const Banksearch = require('../models/banksearch');

// Handle create actions
exports.create = function(data) {
    return new Promise(async function(resolve, reject) {
        let banksearch = new Banksearch(data);
        const response = await banksearch.save()
        resolve(response)

    });

}


// Handle view contact info
exports.getBranch = function(query) {
    return new Promise(function (resolve, reject) {
        let limit = parseInt(query.limit)+1;
        let offset = parseInt(query.offset);

        let res = Banksearch.find({"branch": {'$regex' : '.*' + query.q + '.*'}}).sort({ifsc:1}).limit(limit);
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
        let limit = parseInt(query.limit);
        let offset = parseInt(query.offset);
        let q = query.q.toUpperCase();

        let res = Banksearch.find({"city": {'$regex' : '.*' + q + '.*'}}).sort({ifsc:1}).limit(limit);
            res.exec(function(err, res) {
            if (err) {
                reject(err);
            }
            resolve({branches: res.slice(offset, limit + offset)});
        })
    })
}