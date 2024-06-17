const express = require('express');


const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./connector/dbconnection'); 
 const movieRouter = require('./routes/movieRoutes'); 


app.use(express.json());

connectDB();


app.get('/', (req, res) => {
  res.send('Welcome to the Project API');
});

app.use('/movie', movieRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





