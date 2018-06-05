let express = require('express');
let path = require('path');
let app = express();

let publicDir = path.resolve(__dirname, '../../public');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(publicDir + "/index.html");
});

app.listen(80, function(){
    console.log("listening to this joint on port 9000");
});
