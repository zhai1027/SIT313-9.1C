import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc,getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8NX_SO2-yuppVLQ5gLm4VTmtbcpCZhVM",
    authDomain: "deakin-sit313-w7.firebaseapp.com",
    projectId: "deakin-sit313-w7",
    storageBucket: "deakin-sit313-w7.appspot.com",
    messagingSenderId: "1086472943938",
    appId: "1:1086472943938:web:8fb9e1b832f761407930db"
  };
  
  // Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt:"select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const db = getFirestore();

export const createdUserDocFromAuth = async (userAuth, additionalInformation = {}) =>{
  if(!userAuth.email) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if( ! userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }
    catch(error){
      console.log('Error in creating', error.message)
    }
    return userDocRef;
  }
}

export const createAuthUserWithEmailAndPassword = async(email,password) =>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async(email,password) =>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}