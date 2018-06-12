let Firebase = require('./FirebaseService');

class BlogController{
    GetCategory(category){
        return new Promise((resolve, reject) => {
            resolve("batman");
        });        
    }
}

module.exports = BlogController;