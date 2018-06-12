let express = require('express');
let path = require('path');
let app = express();

const BlogController = require('./handlers/BlogController');
let blogController = new BlogController();


let publicDir = path.resolve(__dirname, '../../public');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(publicDir + "/index.html");
});

app.get('/api/bloglist/:category', (req, res) => {
    let { category } = req.params;
    blogController.GetCategory(category)
        .then((response) => {
            res.send(`Here's your blog! ${response}`);
        })
        .catch(error => {
            res.sendStatus(400);
        });    
});

app.listen(80, function(){
    console.log("listening to this joint on port 9000");
});