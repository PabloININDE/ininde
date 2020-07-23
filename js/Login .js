
var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function(){
    if(this.value.length>=1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}

/////

const correo = document.getElementById("correo").value;
const password = document.getElementById("password").value;
const error = document.getElementById("error");
var mensajeserror = [];

  formulario.addEventListener("submit",function(evt){

  mensajeserror = [];

  if(correo.value == null || correo.value == ""){
    mensajeserror.push("Ingresa tu correo <br>");
    console.log("prueba1");
  }
  
  if(password.value.length < 6 || password.value == "" ){
    mensajeserror.push("Ingresa contraseña valida <br>");
  }


  error.innerHTML = mensajeserror.join(", ")

  evt.preventDefault();

  

    })



/*

  ////// FIREBASE ////

  var firebaseConfig = {
    apiKey: "AIzaSyDQjx4GUhSev-hOOejRVhgo40V4tU0bw5M",
    authDomain: "web-ininde.firebaseapp.com",
    databaseURL: "https://web-ininde.firebaseio.com",
    projectId: "web-ininde",
    storageBucket: "web-ininde.appspot.com",
    messagingSenderId: "344095872356",
    appId: "1:344095872356:web:1db1463bf737089c029671",
    measurementId: "G-4YE9ED9MFY"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   // generar una referencia
   var ref = firebase.database().ref("name");

   // darle un valor a esa referencia

   ref.set(10.25);

   // ahora en una función que toma la data desde un input

   executeDB = () => {
     if (mensajeserror.length == 0) {

      var ref = firebase.database().ref("persons");

      var person = {
        name: document.getElementById("nombre").value,
        email: document.getElementById("correo").value,
        tel: document.getElementById("telefono").value,
        sect: document.getElementById("sector").value,
       
      }
  
      ref.push(person);}

     }

*/

