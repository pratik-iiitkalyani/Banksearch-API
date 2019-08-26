// all endpoint should be defined in this file

// Initialize express router
const Router = require("express").Router();


//Import contact controller
const Banksearch = require('../database/controllers/banksearch');


module.exports = (Router) => {
    //banksearch routes

    Router.route('/')
        .get(async function(req, res) {
            res.send("App is running.\nProvide route: '/api/branches?q=Bangalore&limit=4&offset=0' or \n'/api/branches/autocomplete?q=RTGS&limit=3&offset=0'")
        });


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
            var queryArray = Object.keys(req.query)
            var data = []
            var query = {}
            
            for(let value in req.query)
                data.push(req.query[value])

            var i = 0
            for(let q of queryArray) {
                query[q.toLowerCase()] = data[i]
                i++;
            }
            try {
                const Response = await Banksearch.getBranch(query);
                // console.log("response", Response)
                res.send(Response)
            } catch (err) {
                res.send("error")
                console.log(err)
            }
        });


    Router.route('/api/branches')
        .get(async (req, res) => {

            var queryArray = Object.keys(req.query)
            var data = []
            var query = {}
            
            for(let value in req.query)
                data.push(req.query[value])

            var i = 0
            for(let q of queryArray) {
                query[q.toLowerCase()] = data[i]
                i++;
            }

            try {
                const Response = await Banksearch.getCity(query);
                // console.log("response", Response)
                res.send(Response)
            } catch (err) {
                res.send("error")
                console.log(err)
            }
        });
    }