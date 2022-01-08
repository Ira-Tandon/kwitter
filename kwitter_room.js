//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyB5obkKnsdg9AlLOcL1O7dtpUM-l82-OsA",
    authDomain: "kwitter-cba49.firebaseapp.com",
    databaseURL: "https://kwitter-cba49-default-rtdb.firebaseio.com",
    projectId: "kwitter-cba49",
    storageBucket: "kwitter-cba49.appspot.com",
    messagingSenderId: "666681611155",
    appId: "1:666681611155:web:06b6eeb11f10f7bbe44e66",
    measurementId: "G-XGHB9MQQ9Y"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
