const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const methodOverride = require('method-override');
mongoose.connect('mongodb://localhost/rotten-potatoes');






const exphbs = require("express-handlebars");

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');
app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({extended: true}));

const reviews = require('./controllers/reviews')(app);

//let reviews = [
//  { title: "Great Review", movieTitle: "Batman II" },
//  { title: "Awesome Movie", movieTitle: "Titanic" },
//  { title: "Weird Movie", movieTitle: "The human centipede" }
//];








app.listen(3000, () => {
    console.log("app listening on port 3000");
});





module.exports = app;
