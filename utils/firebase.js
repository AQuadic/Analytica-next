import {initializeApp} from "firebase/app";
import localforage from "localforage";
import {getMessaging, getToken} from "firebase/messaging";

const firebaseCloudMessaging = {
    init: async () => {
        // Initialize the Firebase app with the credentials
        const firebaseConfig = {
            apiKey: "AIzaSyAsZ4wefuNU3MnFXezUt4c9F6bPus_5h8s",
            authDomain: "mnjz-learn.firebaseapp.com",
            databaseURL: "https://mnjz-learn-default-rtdb.firebaseio.com",
            projectId: "mnjz-learn",
            storageBucket: "mnjz-learn.appspot.com",
            messagingSenderId: "212347192722",
            appId: "1:212347192722:web:f578fe9307134c6ef92d4b",
            measurementId: "G-42LXRJ6N1B"
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