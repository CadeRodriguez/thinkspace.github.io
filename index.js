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


//SIGN UP

//form
$('#signformm').submit(function(e) {
    e.preventDefault();
    console.log("Form submitted");

    //variables
    var signPhone = s_phone.value;
    var signPass = s_pass.value;
    var confirmPass = s_confirm.value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        //handle errors here
        var errorMessage = error.message;
    })

    verifyConfirm(signPass, confirmPass);

    s_phone.value = '';
    s_pass.value = '';
    s_confirm.value = '';
});

//CREATE AN ACCOUNT

/* 
Steps:

1. Validation inside the account - DONE
2. 

*/
function verifyConfirm(signpass, confirmpass) {

    if (signpass != confirmpass) {
        document.getElementById('s_confirm').classList.add('shake');   
    };


function createID() {
    return Math.floor(Math.random() * 8999999) + 1000000;
};


function choosePhoto() {
    var photo;
    switch (Math.floor(Math.random() * 6)) {
        case 1:
            photo = a;
        case 2: 
            photo = b;
        case 3: 
            photo = c;
        case 4:
            photo = d;
        case 5: 
            photo = e;
        case 6: 
            photo = f; 
    };
};


//LOG IN

$('#logformm').submit(function(e) {
    e.preventDefault();
    console.log("Form submitted");

    var logPhone = l_phone.value;
    var logPass = l_pass.value;

    verifyLog(logPhone, logPass);

    l_phone.value = '';
    l_pass.value = '';
});

$(document).ready(function(){
    document.getElementById('s_confirm').classList.remove('shake');
})
