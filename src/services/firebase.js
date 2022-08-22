/**
 * FIREBASE
 *
 * https://console.firebase.google.com - создавать проект тут
 * далее ставим сам пакет - npm i firebase
 *
 * далее на сайте выбираем web и указываем имя нашего проекта, на имя все ровно
 * оно для тебя
 *
 * далее он выдаст код, который нужно поместить в наш проект ИЛИ нажать на
 * шестеренку, перейти в настройки проекта и промотать в низ - там это все есть
 */
// для авторизации
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFo09QqNI_gHqdprvHGiesIs48MPlzcVA",
  authDomain: "gb-react-18630.firebaseapp.com",
  projectId: "gb-react-18630",
  storageBucket: "gb-react-18630.appspot.com",
  messagingSenderId: "314580727158",
  appId: "1:314580727158:web:f5042d0b0fcaee3aed3657",
  measurementId: "G-PWGQ9Q6Z54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// для авторизации
const auth = getAuth(app);

export const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
// export const logout = () => signOut(auth);
