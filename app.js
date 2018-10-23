const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes');

const Review = mongoose.model('review',{
    title: String,
    movieTitle: String
});

const exphbs = require("express-handlebars");

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

//let reviews = [
//  { title: "Great Review", movieTitle: "Batman II" },
//  { title: "Awesome Movie", movieTitle: "Titanic" },
//  { title: "Weird Movie", movieTitle: "The human centipede" }
//];

app.get("/", (req,res)=>{
    Review.find()
        .then(reviews =>{
    res.render('reviews-index', {reviews: reviews});
        })
    .catch(err=>{
        console.log(err);
    })
});


app.listen(3000, () => {
    console.log("app listening on port 3000");
});






