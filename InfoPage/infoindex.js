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

//GET NEW ID!!!!
var userID = localStorage.getItem('userID');


document.getElementById('randomid').innerHTML = userID;

//Redirect to topics page
function redirect() {
	window.location.replace("../Topics2/topics2.html")
};

console.log(localStorage.getItem('userID'));
