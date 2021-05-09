 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAMgPF76QGPT0FTt-Rj9HhphO2O8i0l8AA",
      authDomain: "avilandchat.firebaseapp.com",
      databaseURL: "https://avilandchat-default-rtdb.firebaseio.com",
      projectId: "avilandchat",
      storageBucket: "avilandchat.appspot.com",
      messagingSenderId: "521952781910",
      appId: "1:521952781910:web:f171170d7e43956cad3df7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
var room_name = localStorage.getItem("room_name")
function logOut() {
      window.location = "index.html";
      localStorage.removeItem("room_name");
      localStorage.removeItem("Username");
      alert("Logging you out.");
    }

    function send() {
          var user_name = localStorage.getItem("Username");
          var pass = localStorage.getItem("Password");
          var msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            Password: pass
           });
           document.getElementById("msg").value = "";
    }
    
