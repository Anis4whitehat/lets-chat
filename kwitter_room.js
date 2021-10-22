var firebaseConfig = {
  apiKey: "AIzaSyCE_Wbx-yPKEp4YQ1YvpjXe1vjg620cyuw",
  authDomain: "kwitter-8ce44.firebaseapp.com",
  databaseURL: "https://kwitter-8ce44-default-rtdb.firebaseio.com",
  projectId: "kwitter-8ce44",
  storageBucket: "kwitter-8ce44.appspot.com",
  messagingSenderId: "982936257690",
  appId: "1:982936257690:web:f13852c03763b00ac74b23",
  measurementId: "G-RNNJYDCQMC"
}; 
firebase.initializeApp(firebaseConfig); 
user_name = localStorage.getItem("user_name"); 

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }