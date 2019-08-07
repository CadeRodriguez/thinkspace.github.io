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
var signPhone = '', signPass = '', signConfirm = '', confirmWorking, confirmText, textNumber, createdID;

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

//SIGN UP
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
    console.log(createdID);
};

//SEND A TEXT (set textNumber)
function sendText(carrier){

    var signPhone = document.getElementById('s_phone').value;
    console.log("confirmation: sendText");
    textNumber = signPhone.concat(carrier);

    //email confirmation
    console.log("Email will be sent to: " + textNumber);

    //send actual email
    Email.send({
        SecureToken : "25c3508f-af4a-4f78-809f-9d6197e1785f",
        To : textNumber,
        From : "sarahikogan@gmail.com",
        Subject: 'Welcome to Thinkspace!',
        Body : "Welcome to Thinkspace! Your user ID is " + createdID + "!"
    }).then(
      message => alert(message));

    confirmText = true;
};
//form
$('#signformm').submit(function(e) {
    e.preventDefault();
    
    //confirm
    console.log("confirmation: signform");

    var carrier = document.getElementById('carrier').value;
    var signPhone = document.getElementById('s_phone').value;
    var signPass = document.getElementById('s_pass').value;
    var signConfirm = document.getElementById('s_confirm').value;

    console.log("Sign phone when form submitted: " + signPhone);
    //check that pass and confirm are the same
    verifyConfirm(signPass, signConfirm);
    createID();

    //if pass != confirm - shake, else send the text to carrier
    if (confirmWorking = false) {
        setTimeout(function() { document.getElementById('s_confirm').classList.remove('shake'); }, 500);
        console.log("verifyConfirm not run");
    } else if (confirmWorking = true) {
        sendText(carrier);
        console.log("carrier sent");
    };

    console.log("textNumber: " + textNumber);
    saveNewAccount(textNumber, signPass);

    console.log("confirmWorking: " + confirmWorking);
    console.log("confirmText: " + confirmText);
    if (confirmWorking && confirmText) {
        window.location.replace("InfoPage/infoindex.html")
        console.log('yes');
    }
});

//SAVE ACCOUNT INFO TO DATABASE

function saveNewAccount(phone, password) {

    var user = createdID;
    
    db.collection("profiles").doc(user).set({
        phone: phone,
        password: password,
        id: createdID
    });
};
