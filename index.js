const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const verify = require('./routes/verifyToken');
const dotenv = require("dotenv");

dotenv.config();


//server setup
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//mongoDB connect
mongoose.Promise = global.Promise
mongoose.connect(process.env.MDB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:true
}).then(
  () => {
    console.log('Database connected!, successfullly.')
  },
  error => {
    console.log('Could not connect to database : ', error)
  }
)
//------------------------//

//set up routes
app.get('/api', verify, (req, res)=>{
  res.json({
    message: 'shanawaz'
  })
})
app.use('/api/user',require('./routes/authRoutes'));
app.use('/api/hr',require('./routes/hrRoutes'));
app.use('/api/bdm',require('./routes/bdmRoutes'));
// app.use('/api/bdm',require('./routes/bdmRoutes'));

app.listen(PORT, ()=> console.log(`Server started on the port: ${PORT}`));


