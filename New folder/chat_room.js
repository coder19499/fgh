const firebaseConfig = {
    apiKey: "AIzaSyD-PjFPvWJIQ9KFWNNOAJaQ0_neFnyN3fY",
    authDomain: "projec-4edc2.firebaseapp.com",
    databaseURL: "https://projec-4edc2-default-rtdb.firebaseio.com",
    projectId: "projec-4edc2",
    storageBucket: "projec-4edc2.appspot.com",
    messagingSenderId: "890202545356",
    appId: "1:890202545356:web:ec61ed2b71d9b5de8fb669",
    measurementId: "G-7DWLBD2XP8"
  };
  
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" +" "+ user_name + "!";

function addRoom()
 { room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html"; }

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot)
 { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; 
}); 
});
 }








