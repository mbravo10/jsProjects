const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Databse
connectDB();

//Init middleware 
app.use(express.json({ extended: false}));

app.get('/', (req, res) =>{ 
    res.send('API Running')
    });

//Define Routes
//A way to make the app methods much cleaner, we use app.use and inside the route we use we have the required method for each route 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})