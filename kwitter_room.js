const firebaseConfig = {
    apiKey: "AIzaSyA6H8ulh-fNn5DS-3QIKjtWBIl7EPmulA0",
    authDomain: "letschat-7d3f1.firebaseapp.com",
    databaseURL: "https://letschat-7d3f1-default-rtdb.firebaseio.com",
    projectId: "letschat-7d3f1",
    storageBucket: "letschat-7d3f1.appspot.com",
    messagingSenderId: "585129117539",
    appId: "1:585129117539:web:836cc560d060b78e70f556"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
   function addRoom()
   {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name",room_name);
   }
   function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}