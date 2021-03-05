const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//WIll give us promise async/await
//Whenever we use async await we wanna try in a try/catch block 
//Creates a save warning that will be adressed in the following update for mongoose
//Mongo error also a safe ignore
const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;