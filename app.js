const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const Webhook = require('coinbase-commerce-node').Webhook;

app.use(bodyParser.json());

app.get('/', (req,res) => {
    console.log('is live / ')
    res.render('index.html', {})
    res.status(200)
})

app.post('/webhook', (req, res) => {
    const event = req.body;
    try {
        Webhook.verifySigHeader(event, signature, process.env.CBase_SECRET);
        console.log('Successfully verified');
        res.status(200).send('Webhook received successfully');
    } catch(error) {
        console.log('Failed');
        console.log(error);
    }
  });

app.listen(process.env.PORT, (req, res) => {
    console.log('listening on ' + process.env.PORT)
})
