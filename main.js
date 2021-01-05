var config = {
  apiKey: "AIzaSyDi1yeRtySHX2PaDbWZ5VxrbSvVM5InzG8",
authDomain: "authentication-c53d6.firebaseapp.com",
projectId: "authentication-c53d6",
storageBucket: "authentication-c53d6.appspot.com",
messagingSenderId: "270441044653",
appId: "1:270441044653:web:97a9a5ec59aa7fe69b4424",
measurementId: "G-1EFG4LJ2D8"
};

firebase.initializeApp(config);          
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    document.getElementById("login-div").style.display = "none";
    document.getElementById("signup-div").style.display = "none";
    document.location.href = "/Home.html";
   

   }
    else {
      // No user is signed in.
      document.getElementById("login-div").style.display = "block";
      document.getElementById("signup-div").style.display = "none";
    }
      
  });
  firebase.auth().onAuthStateChanged(function(user) {
  var user = firebase.auth().currentUser;
  if(user != null){
    var email_id = user.email;
    document.getElementById("user").innerHTML = "Welcome  : " + email_id;
  }
 
});


  document.getElementById("user").innerHTML = "Welcome  : " + email_id;


  //  function to open signup page
  function signuppage(){
    document.getElementById("login-div").style.display = "none";
    document.getElementById("signup-div").style.display = "block";
  }

//  New user signin
function signup(){
var newEmail = document.getElementById("newEmail").value;
var newPass = document.getElementById("newPassword").value;
firebase.auth().createUserWithEmailAndPassword(newEmail, newPass)
  .then((user) => {
    // Signed in 
     window.alert("Successfully Signed In");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
}


// new password validation
var check = function() {
  if (document.getElementById('newPassword').value ==
    document.getElementById('newPassword_confirm').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'password matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'password not matching';
  }
}


            // Login
  function login(){
    var userEmail = document.getElementById("inputEmail").value;
    var userPassword = document.getElementById("inputPassword").value;
    
     
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
    });
  }

          //  Password reset
  function sendPasswordReset() {
    var userEmail = document.getElementById("inputEmail").value;
    // [START auth_send_password_reset]
    firebase.auth().sendPasswordResetEmail(userEmail)
      .then(() => {
        // Password reset email sent!
       window.alert("Password reset email sent!");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
      });
    // [END auth_send_password_reset]
  }

function logout(){
  firebase.auth().signOut();
  window.location = 'index.html';
}
