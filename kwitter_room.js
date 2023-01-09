// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAEXWuMIKiP78XfCVNTRHI6Py-uiRm5BwA",
    authDomain: "twito-ba470.firebaseapp.com",
    projectId: "twito-ba470",
    storageBucket: "twito-ba470.appspot.com",
    messagingSenderId: "125020631690",
    appId: "1:125020631690:web:7ed430feec26a860547373"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //ADD YOUR FIREBASE LINKS HERE

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

user_name = localStorage.getItem("UserName");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!" ;