const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@cluster0.qrvx0.mongodb.net/'+process.env.DB_HOST+'?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;

