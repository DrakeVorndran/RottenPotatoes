const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes');

const Review = mongoose.model('review',{
    title: String,
    description: String,
    rating: Number,
    movieTitle: String
});

const exphbs = require("express-handlebars");

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');


app.use(bodyParser.urlencoded({extended: true}));

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


app.get('/reviews/new', (req,res) =>{
    res.render('reviews-new',{});
});

app.post("/reviews", (req,res) =>{
    Review.create(req.body).then((review) => {
        console.log(review);
        res.redirect('/');
    }).catch((err) => {
        console.log(err.message);
    })
})


app.listen(3000, () => {
    console.log("app listening on port 3000");
});






