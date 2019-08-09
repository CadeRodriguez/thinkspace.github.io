  var firebaseConfig = {
    apiKey: "AIzaSyCqZk2mo49EHc39H-p4HTLJLD-47yHb0zA",
    authDomain: "thinkspace-86dba.firebaseapp.com",
    databaseURL: "https://thinkspace-86dba.firebaseio.com",
    projectId: "thinkspace-86dba",
    storageBucket: "thinkspace-86dba.appspot.com",
    messagingSenderId: "519498524544",
    appId: "1:519498524544:web:32100239d99f92d4"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


var dropbtn = document.getElementById("dropbtn");
var content = document.getElementById("content");
var die = document.getElementById("die");
var mainimg = document.getElementById("mainimg");
var profile = document.getElementById('profilephoto');

//Add event listenerss
dropbtn.addEventListener("click", dropdown);

//set transitions
die.style.transition = "all .3s ease-in-out";
dropbtn.style.transition = "all .5s";
content.style.transition = "height 0.5s ease-in-out";

$("#make_comment").submit(function(e) {
    e.preventDefault();
    var acomment = document.getElementById("comment").value;
    saveItemToDatabase(acomment); ///calls the function that saves the comment to the database
    comment.value=""; ///clears the bar
    putCommentOnPage(); //calls the function that actually puts the comment on the page 
});
     

function saveItemToDatabase(acomment) {
    doc = db.collection("article1").add({
        comment: acomment,
    })  
        .then(function (docRef) {
            docRef.get().then(function (doc) {
                putCommentOnPage(doc);

            });
        });
}



function putCommentOnPage(doc) {
    console.log("im working mama");  
    var comment_input = document.createElement("div");
    comment_input.classList.add("comment_input");
    var comment_text_elem = document.createElement("p");
    
    comment_text_elem.innerHTML = doc.data().comment;    

    
    //var personal_icon = document.getElementById("mainimg").value; //this
    //var commentpersonalicon = document.createElement("img");  //is
    //commentpersonalicon.src = personal_icon; // the section
    //commentpersonalicon.classList.add("commenticon"); //that needs
    //comment_input.appendChild(commentpersonalicon); //work
    console.log("im working up to here");


    var personalid = document.getElementById("idfield").innerHTML;
    var id_number_elem = document.createElement("p");
    id_number_elem.innerHTML = personalid; 
    console.log(id_number_elem.innerHTML);
    comment_input.appendChild(id_number_elem); 
    id_number_elem.classList.add("commentnumber");
   

    comment_input.appendChild(comment_text_elem);
    console.log(comment_input);
    document.getElementById("container").appendChild(comment_input);

    var report1button = document.createElement("button");
    report1button.innerHTML = "report";
    report1button.id = "x";
    comment_input.appendChild(report1button);
    report1button.addEventListener ("click", function() {
        alert("you have successfully reported this comment");
    });
   var comment_input_id = doc.id
   comment_input.id = comment_input_id;
   console.log("im working!!");


    
};

function loadComments() {
    db.collection("article1").get().then(function(querySnapshot) {
        querySnapshot.forEach(function (doc) {
        putCommentOnPage(doc);
        });
    });
};

$(document).ready(function () {
    loadComments()
    console.log("reloaded");
});

//SAVE TO DATABASE
function savePhotoToDatabase(photo) {
    doc = db.collection("article1").set({
        photo: photo
    });
};

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCqZk2mo49EHc39H-p4HTLJLD-47yHb0zA",
authDomain: "thinkspace-86dba.firebaseapp.com",
databaseURL: "https://thinkspace-86dba.firebaseio.com",
projectId: "thinkspace-86dba",
storageBucket: "thinkspace-86dba.appspot.com",
messagingSenderId: "519498524544",
appId: "1:519498524544:web:32100239d99f92d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

//--- COPY TO ALL ---//
// set variables
var dropbtn = document.getElementById("dropbtn");
var content = document.getElementById("content");
var die = document.getElementById("die");
var mainimg = document.getElementById("mainimg");
var profile = document.getElementById('profilephoto');

//get ID from local storage
var userID = localStorage.getItem('userID');
console.log("userID is " + userID);

var logDocID = localStorage.getItem('logDocID');
console.log('doc id: ' + logDocID);

var logPhotoID = localStorage.getItem('photo');
console.log("photo original: " + logPhotoID);

console.log(logPhotoID);
//STYLING 

//dropdown 
dropbtn.addEventListener("click", dropdown);

//set transitions
die.style.transition = "all .3s ease-in-out";
dropbtn.style.transition = "all .5s";
content.style.transition = "height 0.5s ease-in-out";

//dropdown button rotate
function dropdown() {
    if (content.style.display === 'none') {
        content.style.display = "block";
        dropbtn.style.transform = "rotate(180deg)"; 
    } else {
        content.style.display = "none";
        dropbtn.style.transform = "rotate(0deg)";
    };
};

//set profile pic
function setprofile(photo) {
    console.log("setprofile photo: " + photo);
    switch (photo) {
        case 1:
        mainimg.src = document.getElementById('1').src;
        profile.src = document.getElementById('1').src;
        localStorage.setItem('photo', 'https://i.ibb.co/Y4gpwF4/Artboard-20.png');
        break;

        case 2:
        mainimg.src = document.getElementById('2').src;
        profile.src = document.getElementById('2').src;
        localStorage.setItem('photo', "https://i.ibb.co/hy3WGQW/Artboard-21.png");
        break;

        case 3:
        mainimg.src = document.getElementById('3').src;
        profile.src = document.getElementById('3').src;
        localStorage.setItem('photo', "https://i.ibb.co/4ZmqYcS/Artboard-22.png");
        break;

        case 4:
        mainimg.src = document.getElementById('4').src;
        profile.src = document.getElementById('4').src;
        localStorage.setItem('photo', "https://i.ibb.co/V2LZmJ8/Artboard-24.png");
        break;

        case 5:
        mainimg.src = document.getElementById('5').src;
        profile.src = document.getElementById('5').src;
        localStorage.setItem('photo', "https://i.ibb.co/J5M0cWR/Artboard-25.png");
        break;

        case 6:
        mainimg.src = document.getElementById('6').src;
        profile.src = document.getElementById('6').src;
        localStorage.setItem('photo', "https://i.ibb.co/gdqMrnH/Artboard-26.png");
        break;

        default:
        mainimg.src = document.getElementById(doc.data().photo).src;
        profile.src = document.getElementById(doc.data().photo).src;
        localStorage.setItem('photo', "https://i.ibb.co/Y4gpwF4/Artboard-20.png");
    };
};

//roll die on click and reset ID
function roll() {
    //roll die on click
    if (die.style.transform === "rotate(0deg)") {
        die.style.transform = "rotate(720deg)";
    } else {
        die.style.transform = "rotate(0deg)";
    };

    //CREATE NEW ID AND SET TO DATABASE
    userID =  (Math.floor(Math.random() * 8999999) + 1000000).toString();
    console.log(userID);
    saveIDToDatabase(userID);
    console.log(localStorage.getItem('photo'));
    savePhotoToDatabase(logPhotoID);
    //set id fields to new id
    document.getElementById('idfield').innerHTML = userID;
    document.getElementById('idnumber').innerHTML = userID;
    //reset in storage
    localStorage.setItem('userID', userID);
};


function saveIDToDatabase(id) {
    console.log("ID initiated");
    //updates ID in database!!!!
    db.collection('profiles').doc(logDocID).update({
        id: id
    });
    console.log(id);
};

function savePhotoToDatabase(photo) {
    console.log("photo initiated");
    db.collection('profiles').doc(logDocID).update({
        photo: photo
    });
    console.log(logPhotoID);
}

function premium() {
    window.location.replace("../PremiumPage/premiumindex.html");
}
