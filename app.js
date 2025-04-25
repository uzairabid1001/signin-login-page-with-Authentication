var firebaseConfig = {
    apiKey: "AIzaSyCcnYcW1C7TbAn2vz-lbTq_SnUuhGO8_J4",
    authDomain: "signup-page-9214a.firebaseapp.com",
    projectId: "signup-page-9214a",
    storageBucket: "signup-page-9214a.firebasestorage.app",
    messagingSenderId: "856530787760",
    appId: "1:856530787760:web:5d50aa8384d198fd83ca75",
    measurementId: "G-QWEHYYWY9B"
  };

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function signup(){
    var name = document.getElementById('Signupname');
    var email = document.getElementById('Signupemail');
    var pass = document.getElementById('Signuppass');
    // console.log(name.value ,email.value ,pass.value);


    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        
        // ..
      });
}function login(){
    var email = document.getElementById('loginemail');
    var pass = document.getElementById('loginpass');
    console.log(email.value ,pass.value);


    firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
// ...
    });
  
}