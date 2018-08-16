import * as firebase from 'firebase';
import { errorMessageService } from './error-message';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCo2GP2EwBgwOtt8YM2P77drbo0b1OdUac",
    authDomain: "mychat-f1bd2.firebaseapp.com",
    databaseURL: "https://mychat-f1bd2.firebaseio.com",
    projectId: "mychat-f1bd2",
    storageBucket: "mychat-f1bd2.appspot.com",
    messagingSenderId: "722686152825"
};

firebase.initializeApp(firebaseConfig);

export const userService = {

    signUp: (userModel) => {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
                userModel.email, userModel.password
            ).then(credential => {
                resolve(credential);
            }).catch(error => {
                var messageToShow = "";
                switch (error.message.trim()) {
                    case "The email address is badly formatted.":
                        messageToShow = errorMessageService.getErrorByName("invalid_email");
                        break;
                    case "Password should be at least 6 characters":
                        messageToShow = errorMessageService.getErrorByName("password_min_6_digits");
                        break;
                    case "The email address is already in use by another account.":
                        messageToShow = errorMessageService.getErrorByName("email_in_use");
                        break;
                    default:
                        messageToShow = "Ocorreu um erro inesperado."
                        break;
                }
                reject(messageToShow);
            });
        })
    },

    login: (email, password) => {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(credentials => {
                    resolve(credentials)
                })
                .catch(error => {
                    reject(error);
                });
        })
    }

}