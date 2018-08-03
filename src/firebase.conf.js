import firebase from 'firebase'

const config = {

    apiKey: "AIzaSyANvRU-DLcb0AEhSDVBuCLl53UTQdntXnI",
    authDomain: "galastore-76c30.firebaseapp.com",
    databaseURL: "https://galastore-76c30.firebaseio.com",
    projectId: "galastore-76c30",
    storageBucket: "galastore-76c30.appspot.com",
    messagingSenderId: "197394710467"
}

firebase.initializeApp(config);

export function firebaseListener(func) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // console.log("User log in success", user);
            func(true, user)
        } else {
            // console.log("User log in failed", user);
            func(false)
        }
    }, function(error) {
        console.log(error)
    });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
