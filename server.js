const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3333;

mongoose.connect('mongodb+srv://alisson:Aj17062010@cluster0.ezlmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
	useUnifiedTopology: true,
    
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('MongoDB conectado com Sucesso!');
    }
});

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(routes);

app.listen(port, function () {
    console.log(`Server runing on port ${port}`);
});
