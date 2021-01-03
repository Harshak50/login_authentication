  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("login-div").style.display = "none";
      document.getElementById("loggedin-div").style.display = "block";
      

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user").innerHTML = "Welcome User : " + email_id;

    }

    } else {
      // No user is signed in.
      document.getElementById("login-div").style.display = "block";
      document.getElementById("loggedin-div").style.display = "none";
    }
  });

  function login(){
    var userEmail = document.getElementById("inputEmail").value;
    var userPassword = document.getElementById("inputPassword").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  }


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
}

  
  