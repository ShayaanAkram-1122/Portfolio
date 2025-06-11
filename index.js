import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set('view engine', 'ejs'); 
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home'); 
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/skills', (req, res) => {
    res.render('skills'); 
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});