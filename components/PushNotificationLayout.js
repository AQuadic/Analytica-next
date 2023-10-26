"use client";

import { onMessageListener, requestPermission } from "@/utils/firebase";
import React, { useEffect } from "react";


function PushNotificationLayout({ children }) {
  useEffect(() => {
    requestPermission();
    const unsubscribe = onMessageListener().then((payload) => {
      console.log(payload);
    });
    return () => {
      unsubscribe.catch((err) => console.log("faild", err));
    };
  }, []);

  return <>{children}</>;
}

export default PushNotificationLayout;
