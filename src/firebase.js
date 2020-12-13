import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAG1uvsJBQjKh3HB8Rb3lrak4CBJu5hjck",
    authDomain: "tinder-2ec69.firebaseapp.com",
    projectId: "tinder-2ec69",
    storageBucket: "tinder-2ec69.appspot.com",
    messagingSenderId: "543070582138",
    appId: "1:543070582138:web:8148a95cce318615e752c3",
    measurementId: "G-9YDFZYECZ5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()


export default database;