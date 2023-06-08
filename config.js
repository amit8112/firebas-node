


const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyDPkQ2xpCfdBtFKtr_f9LQqi_cK8iPMsKA",
    authDomain: "crud-node-react-5df73.firebaseapp.com",
    projectId: "crud-node-react-5df73",
    storageBucket: "crud-node-react-5df73.appspot.com",
    messagingSenderId: "1082775812725",
    appId: "1:1082775812725:web:05d1c1510aebc5bff2563c",
    measurementId: "G-ZZ1YJ6DJN9"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
