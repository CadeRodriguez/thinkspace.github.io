//configure firebase
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

//set variables
var signPhone = '', signPass = '', signConfirm = '', confirmWorking, confirmText, textNumber, createdID, logDocID;

/* SmtpJS.com - v3.0.0 */
var Email = {
    send: function(a) {
        return new Promise(function(n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) {
                n(e)
            })
        })
    },
    ajaxPost: function(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
            var e = a.responseText;
            null != t && t(e)
        }, a.send(n)
    },
    ajax: function(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function() {
            var e = t.responseText;
            null != n && n(e)
        }, t.send()
    },
    createCORSRequest: function(e, n) {
        var t = new XMLHttpRequest;
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
    }
};

//!!!SIGN UP!!!!!
//Defining all parts of database save before actual save function

//CONFIRM ACCOUNT
function verifyConfirm(signpass, confirmpass) {
    //shake if false
    if (signpass != confirmpass) {
        document.getElementById('s_confirm').classList.add('shake');
        confirmWorking = false;
    } else {
        confirmWorking = true;
    };
};

//CREATE ID (set id)
function createID() {
    createdID = Math.floor(Math.random() * 899999999) + 100000000;
    createdID = createdID.toString();
};

//SEND A TEXT (set textNumber)
function sendText(carrier){

    var signPhone = document.getElementById('s_phone').value;
    textNumber = signPhone.concat(carrier);

    //send actual email
    Email.send({
        SecureToken : "25c3508f-af4a-4f78-809f-9d6197e1785f",
        To : textNumber,
        From : "sarahikogan@gmail.com",
        Subject: 'Welcome to Thinkspace!',
        Body : "Your user ID is " + createdID + "!"
    }).then(
      message => alert(message));

    confirmText = true;
};
//form
$('#signformm').submit(function(e) {
    e.preventDefault();
    
    var carrier = document.getElementById('carrier').value;
    var signPhone = document.getElementById('s_phone').value;
    var signPass = document.getElementById('s_pass').value;
    var signConfirm = document.getElementById('s_confirm').value;

    //check that pass and confirm are the same
    verifyConfirm(signPass, signConfirm);
    createID();

    //if pass != confirm - shake, else send the text to carrier
    if (confirmWorking = false) {
        setTimeout(function() { document.getElementById('s_confirm').classList.remove('shake'); }, 500);
    } else if (confirmWorking = true) {
        sendText(carrier);
    };

    saveNewAccount(signPhone, signPass);

    console.log("confirmWorking: " + confirmWorking);
    console.log("confirmText: " + confirmText);
    if (confirmWorking && confirmText) {
        setTimeout(function() {window.location.replace("../InfoPage/infoindex.html"); }, 5000);
    }
});

//SAVE ACCOUNT INFO TO DATABASE

function saveNewAccount(phone, password) {

    var user = createdID;

    localStorage.setItem('userID', createdID);
    localStorage.setItem('photo', 'https://i.ibb.co/Y4gpwF4/Artboard-20.png');

    db.collection("profiles").add({
        phone: phone,
        password: password,
        id: createdID,
        photo: 'https://i.ibb.co/Y4gpwF4/Artboard-20.png'
    });
};

//!!!LOG IN!!!!!

$('#logformm').submit(function(e) {
    e.preventDefault();

    //confirm
    console.log("confirmation: logform");
    var logPhone = document.getElementById('l_phone').value;
    var logPass = document.getElementById('l_pass').value;
    logPhoneQuery();

    function logPhoneQuery() {
        //get doc id where phone number matches
        db.collection("profiles").where("phone", "==", logPhone).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                logDocID = doc.id;
                localStorage.setItem('logDocID', doc.id);
                if (doc.data().password === logPass) {
                    localStorage.setItem('userID', doc.data().id);
                    window.location.replace("../TopicPage/topicsindex.html");
                } else if (doc.data().password != logPass) {
                    alert('Your username and password do not match. Please try again.')
                }
            });
        });
    };
});

