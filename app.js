const express = require("express");
const app = express();

const exphbs = require("express-handlebars");

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

let reviews = [
  { title: "Great Review", movieTitle: "Batman II" },
  { title: "Awesome Movie", movieTitle: "Titanic" },
  { title: "Weird Movie", movieTitle: "The human centipede" }
];

app.get("/", (req,res)=>{
    res.render('reviews-index', {reviews: reviews});
});


app.listen(3000, () => {
    console.log("app listening on port 3000");
});






