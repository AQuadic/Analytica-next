import { initializeApp } from "firebase/app";

import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBwFec3Xhm0iqfi_sbfznE2FRsGmzzyQRM",
  authDomain: "analytica-edu.firebaseapp.com",
  projectId: "analytica-edu",
  storageBucket: "analytica-edu.appspot.com",
  messagingSenderId: "408685117985",
  appId: "1:408685117985:web:dd3f2aba29a45bf1bb1960",
  measurementId: "G-H1EGZDEL7Q",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
export const requestPermission = () => {
  console.log("Req user peimitions...");
  Notification.requestPermission().then(async (permission) => {
    if (permission === "granted") {
      console.log("Notification User Permission Granted");
      try {
            const currentToken = await getToken(messaging, {
                vapidKey: "BG9RcVBXVT3VYA4_9978qLsG9_9AzUcUhO8napT3QtXPVbq7FguLQnIRDhPNkVtl0Kes_Wj_wkl8LHTJugs19nM",
            });
            if (currentToken) {
                console.log("client Token ", currentToken);
            } else {
                console.log("Faild to Generate the app req token.");
            }
        } catch (err) {
            console.log("an error occure when req to receive the token", err);
        }
    } else {
      console.log("User Permission Denied");
    }
  });
};
requestPermission();
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
