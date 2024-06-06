import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig : {apiKey : string, authDomain : string, projectId : string, storageBucket : string, messagingSenderId : string, appId : string, measurementId : string} = {
    apiKey: "AIzaSyBEmHVOcvSxR5ncnk0OWj6KL4YxrSsaUMg",
    authDomain: "musibridge-a7791.firebaseapp.com",
    projectId: "musibridge-a7791",
    storageBucket: "musibridge-a7791.appspot.com",
    messagingSenderId: "40618266303",
    appId: "1:40618266303:web:24408fde93ae776e68000a",
    measurementId: "G-NG42FYY9TT"
};

export const app : FirebaseApp = initializeApp(firebaseConfig);
export const analytics : Analytics = getAnalytics(app);
export const auth : Auth = getAuth(app);
