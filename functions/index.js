/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

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

// - Listen Commands
exports.api = functions.https.onRequest(app);