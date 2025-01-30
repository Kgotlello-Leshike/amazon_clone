
const functions = require("firebase-functions")
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51QgW2QFad9Y91BQe5Y9FC5BR9knQJilGeNUoILY4PlECq9MhirPOjwGmWnNvGRZW2gQjg5PiCaUC530g6twmjzIB009maRsDzh');

//API 

// - APP Confirg      
const app = express()

// - Middlewares
app.use(cors({origin: true}))
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send('Hello world'));
app.post("/payment/create", async (req, res) => {
    const total = req.query.total

    console.log("payment request recieved ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, 
        currency: "usd",
    });
    //If okay created
    res.status(201).send({clientSecret: paymentIntent.client_secret })
})

// - Listen Commands
exports.api = functions.https.onRequest(app);