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

var dropbtn = document.getElementById("dropbtn");
var content = document.getElementById("content");
var die = document.getElementById("die");
var mainimg = document.getElementById("mainimg");
var profile = document.getElementById('profilephoto');

//Add event listeners
dropbtn.addEventListener("click", dropdown);

//set transitions
die.style.transition = "all .3s ease-in-out";
dropbtn.style.transition = "all .5s";
content.style.transition = "height 0.5s ease-in-out";


//FUNCTIONS
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

//roll die on click
function roll() {
    if (die.style.transform === "rotate(0deg)") {
        die.style.transform = "rotate(720deg)";
    } else {
        die.style.transform = "rotate(0deg)";
    };
};

//set profile pic
function setprofile(photo) {
    var photo = photo;
    console.log(photo);
    switch (photo) {
        case 1:
        mainimg.src = document.getElementById('1').src;
        profile.src = document.getElementById('1').src;
        savePhotoToDatabase(1);
        break;

        case 2:
        mainimg.src = document.getElementById('2').src;
        profile.src = document.getElementById('2').src;
        savePhotoToDatabase(2);
        break;

        case 3:
        mainimg.src = document.getElementById('3').src;
        profile.src = document.getElementById('3').src;
        savePhotoToDatabase(3);
        break;

        case 4:
        mainimg.src = document.getElementById('4').src;
        profile.src = document.getElementById('4').src;
        savePhotoToDatabase(4);
        break;

        case 5:
        mainimg.src = document.getElementById('5').src;
        profile.src = document.getElementById('5').src;
        savePhotoToDatabase(5);
        break;

        case 6:
        mainimg.src = document.getElementById('6').src;
        profile.src = document.getElementById('6').src;
        savePhotoToDatabase(6);
        break;

        default:
        mainimg.src = document.getElementById(doc.data().photo).src;
        profile.src = document.getElementById(doc.data().photo).src;
        savePhotoToDatabase(1);
    };
};


//LINKS
function politicslive() {
    window.location.replace("../APIFeeds/Politics/politicsindex.html");
};

function politicsbig() {
    window.location.replace("../BigNewsFeeds/Politics/bigpoliticsindex.html");  
};

//SAVE TO DATABASE
function savePhotoToDatabase(photo) {
    doc = db.collection("users").set({
        photo: photo
    });
};

// On ready - dropdown display to none, so the value isn't undefined
$(document).ready(function() {
content.style.display = "none";
});



