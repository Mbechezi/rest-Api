
const mongoose = require('mongoose');
require('dotenv').config();
const express = require("express");
const route = express();      //definition of "routes"
const Person = require('./models/User.js');   //import users template
const bodyParser = require('body-parser'); // To use the properties of req.body

//connection to the Atlas bd

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {

        // Afficher dans la console que la BDD est connecté
        console.log("Connecté à la BDD");
    })
    .catch((err) => {

        // Erreur sinon
        console.log("Pas connecté");
    });

//GET :  RETURN ALL USERS 
route.get('/User', function (req, res) {
    Person.find(function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

// POST :  ADD A NEW USER TO THE DATABASE -->Upadating
route.post('/User', function (req, res) {
    Person.create(req.body, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
            console.log("Udating !")
        }
    }

    );
});

//PUT : EDIT A USER BY ID 

//DELETE : REMOVE A USER BY ID 



