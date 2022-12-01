import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBKxAzjycQGcqny-LkUqY09VaLZtwA0XTg",
    authDomain: "react-11-22.firebaseapp.com",
    databaseURL: "https://react-11-22-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-11-22",
    storageBucket: "react-11-22.appspot.com",
    messagingSenderId: "438349437937",
    appId: "1:438349437937:web:a75d071e9a7a7a085d0250"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

export const signUp = async(email: string, password: string) =>
    await createUserWithEmailAndPassword(firebaseAuth, email, password);

export  const logIn = async(email: string, password: string) =>
    await signInWithEmailAndPassword(firebaseAuth, email, password);

export  const logOut = async() => await signOut(firebaseAuth);

export const db = getDatabase(app);

export const getChats = () => ref(db, 'user/chats');