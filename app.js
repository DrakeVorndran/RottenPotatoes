const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const methodOverride = require('method-override');
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
app.use(methodOverride("_method"));

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
        .catch( err => {
        console.log(err);
    })
});



app.get('/reviews/new', (req,res) =>{
    res.render('reviews-new',{});
});

//create

app.post("/reviews", (req,res) =>{
    Review.create(req.body).then((review) => {
        console.log(review);
        res.redirect(`/reviews/${review._id}`)
    }).catch((err) => {
        console.log(err.message);
    });
});

app.get('/reviews', (req,res) => {
    res.redirect('/');
})


app.get("/reviews/:id",(req,res)=>{
    Review.findById(req.params.id).then((review) => {
        res.render('reviews-show', {review: review});
    }).catch((err) => {
        console.log(err.message);
    })
});

app.get('/reviews/:id/edit', (req, res) => {
    Review.findById(req.params.id, (err, review) => {
        res.render('reviews-edit', {review: review}); 
    });
});

app.put('/reviews/:id', (req,res) => {
    Review.findByIdAndUpdate(req.params.id, req.body)
        .then(review => {
        res.redirect(`/reviews/${review._id}`)
    })
        .catch(err => {
        console.log(err.message);
    })
});


app.delete('/reviews/:id', (req, res) => {
    console.log("delete review")
    Review.findByIdAndRemove(req.params.id).then((review) => {
        res.redirect('/');
    }).catch((err) => {
        console.log(er.message);
    })

})


app.listen(3000, () => {
    console.log("app listening on port 3000");
});






