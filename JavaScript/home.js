firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
      document.getElementById("signout").onclick = function(){
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            window.location.href = "login.html";
            
    })
    }
    } else {
      // User is signed out
      // ...
      window.location.href = "login.html";
    }
  });