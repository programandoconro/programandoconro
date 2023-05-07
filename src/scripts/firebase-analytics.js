import { initializeApp } from "firebase/app";
import {
  initializeAnalytics,
  getAnalytics,
  logEvent,
} from "firebase/analytics";

export function logAnalyticEvent(event_name) {
  console.log(event_name);
}

try {
  const firebaseConfig = {
    apiKey: import.meta.env?.PUBLIC_API_KEY,
    authDomain: import.meta.env?.PUBLIC_AUTH_DOMAIN,
    projectId: import.meta.env?.PUBLIC_PROJECT_ID,
    storageBucket: import.meta.env?.PUBLIC_STORAGE_BUCKET,
    messagingSenderId: import.meta.env?.PUBLIC_MESSAGING_SENDER,
    appId: import.meta.env?.PUBLIC_APP_ID,
    measurementId: import.meta.env?.PUBLIC_MEASUREMENT_ID,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  initializeAnalytics(app);
  const analytics = getAnalytics(app);
  logEvent(analytics, "main_page");
  logAnalyticEvent = (eventName) => {
    logEvent(analytics, eventName + "-event");
  };
} catch {
  console.log("no firebase config");
}
