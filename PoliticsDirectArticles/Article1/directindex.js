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

var id;

//roll die on click
function roll() {
    if (die.style.transform === "rotate(0deg)") {
        die.style.transform = "rotate(720deg)";
    } else {
        die.style.transform = "rotate(0deg)";
    };

    id =  Math.floor(Math.random() * 8999999) + 1000000;
    document.getElementById('idfield').innerHTML = id;
    document.getElementById('idnumber').innerHTML = id;

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


//SAVE TO DATABASE
function savePhotoToDatabase(photo) {
    doc = db.collection("article1").set({
        photo: photo
    });
};

