document.getElementById("submit").onclick = function(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    let uid = userCredential.user.uid
    // Signed in successfully
    window.location.href = "home.html";
})
.catch((error) => {
    let errorMessage = error.message;
    console.log(error.message)
});
}

