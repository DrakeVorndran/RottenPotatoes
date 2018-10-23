const express = require("express");
const app = express();

const exphbs = require("express-handlebars");

app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.get("/", (req,res)=>{
    res.render('home',{msg:"handlebars are cool"});
});


app.listen(3000, () => {
    console.log("app listening on port 3000");
});