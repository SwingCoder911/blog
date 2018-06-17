let dbConfig = require('../config/dbConfig');
let firebase = require('firebase');

class FirebaseService{
    constructor(){
        try{
            firebase.initializeApp({
                apiKey: dbConfig.firebase.apiKey,
                authDomain: dbConfig.firebase.authDomain,
                databaseURL: dbConfig.firebase.databaseURL,
                projectId: dbConfig.firebase.projectId,
                storageBucket: dbConfig.firebase.storageBucket,
                messagingSenderId: dbConfig.firebase.messagingSenderId
            });
        }catch(err){
            if (!/already exists/.test(err.message)) {
                console.error('Firebase initialization error', err.stack);
            }
        }
        this.Con = firebase.database();
        this.Authenticate()
            .then(() => {
                return this.Con.ref().once('value');
            })
            .then(function (snap) {
                console.log('snap.val(): ', snap.val());
            })
            .catch(error => {
                console.log("Connection error: ", error);
            });
        
    }
    Authenticate(){
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(dbConfig.firebase.signinEmail, dbConfig.firebase.signinPassword)
                .then(() => {
                    resolve();
                })
                .catch(function(sError) {
                    console.log("Sign in error: ", sError)
                    return firebase.auth().createUserWithEmailAndPassword(dbConfig.firebase.signinEmail, dbConfig.firebase.signinPassword);
                })
                .then(() => {
                    resolve();
                })
                .catch((cError) => {
                    console.log("Error with auth: ", cError);
                    reject(cError);
                });
        });
        
    }

    GetCategoryList(){
        return new Promise((resolve, reject) => {
            this.Con.ref('categories').once('value')
                .then((snapshot) => {
                    console.log("Categories: ", snapshot.val());
                    resolve(snapshot.val());
                })
                .catch(error => {
                    console.log("Get category list error: ", error);
                    reject(error);
                });
        });
    }
    /**
     * Figure out a key to write the event to the database
     */
    GetCategoryHistory(categoryId){
        return new Promise((resolve, reject) => {
            this.Con.ref('categories/' + categoryId).once('value')
                .then(snapshot => {
                    console.log("Found category: ", snapshot.val());
                    resolve(snapshot.val());
                })
                .catch(error => {
                    console.log("Get category history error: ", error);
                    reject(error);
                });
        });        
    }
    GetBlog(categoryId, blogId){
        return new Promise((resolve, reject) => {
            this.Con.ref('events/' + eventkey).set(event, () => resolve());
        });  
    }
};

module.exports = FirebaseService;
