import settings from "./settings";

import firebase from "firebase/app";
import "firebase/firestore"; // o cualquier otro módulo que necesites

const firebaseApp = firebase.initializeApp(settings);

export const db = firebaseApp.database();
export default firebaseApp;
