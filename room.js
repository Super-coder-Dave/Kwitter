var firebaseConfig = {
    apiKey: "AIzaSyBvHOeUGJYVh1oDt-uFajpvQQcJyXLYhWE",
    authDomain: "kwitter-8fd19.firebaseapp.com",
    databaseURL: "https://kwitter-8fd19-default-rtdb.firebaseio.com",
    projectId: "kwitter-8fd19",
    storageBucket: "kwitter-8fd19.appspot.com",
    messagingSenderId: "120733425328",
    appId: "1:120733425328:web:56913e3e18ebce3386a575"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("LoginText");
room_name = localStorage.getItem("room_name");

function sendMessage() {
    msg = document.getElementById("textBox").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    })
    document.getElementById("textBox").value = ""
}

function getData() {
    firebase.database().ref("/" + room_name).on('value',
        function (snapshot) {
            document.getElementById("room_div").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['message'];
                name_with_tag = "<h4>" + name + "<img class='user_tick' src='Vertify tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'" + message + "</h4>";
                like_button = "<button class ='btn btn-warning' id=" + firebase_message_id + "value=" + like + " onclick='updateLike(this.id)'";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: " + like + "</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById(".innerHTML += row")

            });
        });
}
getData();