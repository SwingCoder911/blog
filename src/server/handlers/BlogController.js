let FirebaseService = require('./FirebaseService');

class BlogController{
    constructor(){
        this.fbService = new FirebaseService();
    }
    GetCategory(category){
        console.log("Received category: ", category);
        return new Promise((resolve, reject) => {
            this.fbService.GetCategoryHistory(category)
                .then(categoryResponse => {
                    console.log("Found response: ", categoryResponse);
                    resolve(categoryResponse);
                })
                .catch(error => {
                    reject(error);
                });
        });        
    }
    GetCategoryList(){
        return new Promise((resolve, reject) => {
            this.fbService.GetCategoryList()
                .then(categoriesResponse => {
                    console.log("Found categories: ", categoriesResponse);
                    resolve(categoriesResponse);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
}

module.exports = BlogController;