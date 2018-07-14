// Initialize Firebase
import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyANvRU-DLcb0AEhSDVBuCLl53UTQdntXnI",
    authDomain: "galastore-76c30.firebaseapp.com",
    databaseURL: "https://galastore-76c30.firebaseio.com",
    projectId: "galastore-76c30",
    storageBucket: "galastore-76c30.appspot.com",
    messagingSenderId: "197394710467"
};
export default firebase.initializeApp(config);