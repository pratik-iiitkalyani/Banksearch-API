// all endpoint should be defined in this file

// Initialize express router
const Router = require("express").Router();


//Import contact controller
const Banksearch = require('../database/controllers/banksearch');


module.exports = (Router) => {
    //banksearch routes
    Router.route('/create')
        .post(async function(req, res) {
            console.log('request', req.body);
            try {
                let data = req.body;
                let Response = []
                await Promise.all(data.map(async bank => {
                    var savedBank = await Banksearch.create(bank);
                }))
                res.send(Response);
            } catch (err) {
                res.send("error")
                console.log("err", err)
            }
        });

    Router.route('/api/branches/autocomplete')
        .get(async (req, res) => {
            try {
                const Response = await Banksearch.getBranch(req.query);
                // console.log("response", Response)
                res.send(Response)
            } catch (err) {
                res.send("error")
                console.log(err)
            }
        });


    Router.route('/api/branches')
        .get(async (req, res) => {
            console.log("11111111111", req.query)
            try {
                const Response = await Banksearch.getCity(req.query);
                // console.log("response", Response)
                res.send(Response)
            } catch (err) {
                res.send("error")
                console.log(err)
            }
        });
    }