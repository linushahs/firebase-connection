import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC28Vo06TwOvL3k-XxdWYH4xKVcugQTBWA",
  authDomain: "connect-demo-5dbea.firebaseapp.com",
  projectId: "connect-demo-5dbea",
  storageBucket: "connect-demo-5dbea.appspot.com",
  messagingSenderId: "332040202923",
  appId: "1:332040202923:web:021a1f25e57f3fd26925ee",
  measurementId: "G-6C5EZ26B9V",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user.displayName);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
