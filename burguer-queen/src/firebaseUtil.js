import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyDQNazxsjSFHP3Yk4-GbmMJJw9E1KX8Peo",
  authDomain: "burguer-queen-app-aline.firebaseapp.com",
  databaseURL: "https://burguer-queen-app-aline.firebaseio.com",
  projectId: "burguer-queen-app-aline",
  storageBucket: "burguer-queen-app-aline.appspot.com",
  messagingSenderId: "54958254655",
  appId: "1:54958254655:web:46b1adcdeaf7efbccda68a"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.firestore();