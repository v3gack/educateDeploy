const mongoose = require('mongoose')
const URI = "mongodb+srv://admin:bigpoppa@bdprueba.8r9lx.mongodb.net/pruebaDB?retryWrites=true&w=majority";

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;