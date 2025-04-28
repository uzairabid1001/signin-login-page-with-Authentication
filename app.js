

const firebaseConfig = {
  apiKey: "AIzaSyCcnYcW1C7TbAn2vz-lbTq_SnUuhGO8_J4",
  authDomain: "signup-page-9214a.firebaseapp.com",
  databaseURL: "https://signup-page-9214a-default-rtdb.firebaseio.com",
  projectId: "signup-page-9214a",
  storageBucket: "signup-page-9214a.firebasestorage.app",
  messagingSenderId: "856530787760",
  appId: "1:856530787760:web:5d50aa8384d198fd83ca75",
  measurementId: "G-QWEHYYWY9B"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig)
var auth = firebase.auth();

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
      window.location.href = "./home.html";

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
      window.location.href = "./home.html";
            // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
// ...
    });
  
}

function google(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)

    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage);
    
    // ...
  });
}

function savedata() {
  var name =document.getElementById('name')
  var rollnum =document.getElementById('rollnum')

  var obj ={

    name: name.value,
    rollnum : rollnum.value,
  }
  // console.log(obj);
  
  firebase.database().ref('user').push(obj)
}
function getdata() {
  firebase.database().ref('user').on("child_added",function (data){
    console.log(data.val())
  })
}
getdata()