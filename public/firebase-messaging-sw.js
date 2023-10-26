importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase?.initializeApp({
  apiKey: "AIzaSyBwFec3Xhm0iqfi_sbfznE2FRsGmzzyQRM",
  authDomain: "analytica-edu.firebaseapp.com",
  projectId: "analytica-edu",
  storageBucket: "analytica-edu.appspot.com",
  messagingSenderId: "408685117985",
  appId: "1:408685117985:web:dd3f2aba29a45bf1bb1960",
  measurementId: "G-H1EGZDEL7Q"
  });
const messaging = firebase.messaging();