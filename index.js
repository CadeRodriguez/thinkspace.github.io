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

$("#logformm").submit(function (e) {
    e.preventDefault();
console.log("Form Submitted")

    var logphone = lphone_form.value
    var logpass = lpass_form.value

    saveLogToDatabase(logphone, logpass)
})

function saveLogToDatabase(logphone, logpass) {
console.log("Executing saveLogToDatabase()...")
    doc = db.collection("profiles").doc().set({
       PhoneNumber: logphone,
       Password: logpass,
    })
 
}
