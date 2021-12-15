const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const URI = "mongodb+srv://admin:bigpoppa@bdprueba.8r9lx.mongodb.net/materialsdb";

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3001)
//connect to mongoose
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
//require roote
app.use("/",require("./src/routes/noteRoute"));

app.listen(app.get('port'), ()=> {
    console.log(`express server is running on port ${app.get('port')}`)
})