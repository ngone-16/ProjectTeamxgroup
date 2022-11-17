const express = require("express");
const app = express()
const mongoose = require('mongoose');
//
const cors=require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const RouteUsers = require('./routers/userRouter');

const RouteProduits = require('./routers/produitRouter');

mongoose.connect('mongodb+srv://Design:nothing123@serverapiexpress.xvm6eog.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('connexion success !')
}).catch((error) => {
    console.log;
});


//
app.use(bodyParser.json());
app.use('/api/users/',RouteUsers);

app.use('/api/produits/',RouteProduits);
/*app.get('/', (req,res) => {
    res.send('Hello world');
});*/

module.exports = app;
/*const port = 3005;

app.use(express.static('public'));

app.listen(port, () => 
console.log(`server listening on port ${port}`));*/