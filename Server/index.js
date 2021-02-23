const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Nutsmodel = require('./models/Nutsnspices');
require('dotenv').config();
app.use(express.json());

mongoose.connect('mongodb+srv://Mugundhan1010:9487057906_10mugundh10@cluster0.apgim.mongodb.net/NutsnSpices?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});


app.get('/', async (req, res) => {
    const Nuts = new Nutsmodel({});
    try{
        await Nuts.save();
    }catch(err){
        console.log(err);
    }
}) 


app.listen(process.env.PORT || 3001, () =>{
    console.log("Server Running on port 3001 :-)");
})