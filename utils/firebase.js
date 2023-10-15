import {initializeApp} from "firebase/app";
import localforage from "localforage";
import {getMessaging, getToken} from "firebase/messaging";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBwFec3Xhm0iqfi_sbfznE2FRsGmzzyQRM",
  authDomain: "analytica-edu.firebaseapp.com",
  projectId: "analytica-edu",
  storageBucket: "analytica-edu.appspot.com",
  messagingSenderId: "408685117985",
  appId: "1:408685117985:web:dd3f2aba29a45bf1bb1960",
  measurementId: "G-H1EGZDEL7Q"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const firebaseCloudMessaging = {
    init: async () => {
        // Initialize the Firebase app with the credentials
    

       
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

                getToken(messaging, {vapidKey: "BF6L1dWRxUP18FJUM_jbgICDSnPAlBL_PY8N1zFbue3YHX9x_yxmCVYUvo156HtwP3hAhPPHLrgYuuAle6cyAds"}).then((currentToken) => {
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
export {firebaseCloudMessaging};