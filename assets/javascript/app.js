 (function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQO6eaDQEgTaNgLbe0MTLEGzOF8esIJ04",
    authDomain: "autentication-project.firebaseapp.com",
    databaseURL: "https://autentication-project.firebaseio.com",
    projectId: "autentication-project",
    storageBucket: "autentication-project.appspot.com",
    messagingSenderId: "88986349927"
  };
  firebase.initializeApp(config);

  //get elements

  const txtEmail = document.getElementById('email');
  const txtPassword = document.getElementById('password');
  const btnLogin = document.getElementById('btnSignIn');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogOut = document.getElementById('btnSignOut');

  // add login event
  btnLogin.addEventListener('click', e => {
    //get email and password
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();
    //Sign In
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch( e => console.log(e.message));
  })
//add signup event
btnSignUp.addEventListener('click', e => {
  //get email and password
  //TODO: check for real email
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();
  //Sign In
  const promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch( e => console.log(e.message));
})

//logout
btnLogOut.addEventListener('click', e => {
  firebase.auth().signOut();
})

//add a realtime listner
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log("not logged in");
  }
})



}());