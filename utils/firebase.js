

import { initializeApp } from "firebase/app";
import localforage from "localforage";
import { getMessaging, getToken } from "firebase/messaging";
const firebaseCloudMessaging = {
  init: async () => {
    

      // Initialize the Firebase app with the credentials
      const firebaseConfig = {
        apiKey: "AIzaSyCF155mNBMIZOhyAerxcg4aouXHupmqTpU",
        authDomain: "findhelp-9f012.firebaseapp.com",
        databaseURL: "https://findhelp-9f012.firebaseio.com",
        projectId: "findhelp-9f012",
        storageBucket: "findhelp-9f012.appspot.com",
        messagingSenderId: "1019650754389",
        appId: "1:1019650754389:web:c1526ded82d274d395d1dc",
        measurementId: "G-QK2Q19BWZN"
      };
      const app = initializeApp(firebaseConfig);

      try {
        const messaging = getMessaging(app);
        //console.log(messaging);
        const tokenInLocalForage = await localforage.getItem("fcm_token");

         // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
        // Get new token from Firebase
       
          
        getToken(messaging, { vapidKey: "BJepALF0a95YllxgoWS5qnbdvwlURFKW398sHWJQ8WGZ6xFIFA7Ore8aE0WTgHex-iOWzk4JSM541d1se1p_YNQ" }).then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
           // console.log(currentToken);
            localforage.setItem("fcm_token", currentToken);
            return currentToken;
          } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
          // ...
        });
          // Set token in our local storage
        
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    
  },
};
export { firebaseCloudMessaging };