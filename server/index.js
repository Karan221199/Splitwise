const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors());

const {MONGOURI} = require('./keys');

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log('connected to mongo');
})

mongoose.connection.on('error',(err)=>{
    console.log('err connecting',err)
})

require('./models/User');
require('./models/Group');
require('./models/groupChild');

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/group'))

app.listen(3001,()=>{
    console.log('Port is running on 3001');
});