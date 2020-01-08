import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/app';

const config = {
  apiKey: "AIzaSyDQNazxsjSFHP3Yk4-GbmMJJw9E1KX8Peo",
  authDomain: "burguer-queen-app-aline.firebaseapp.com",
  databaseURL: "https://burguer-queen-app-aline.firebaseio.com",
  projectId: "burguer-queen-app-aline",
  storageBucket: "burguer-queen-app-aline.appspot.com",
  messagingSenderId: "54958254655",
  appId: "1:54958254655:web:46b1adcdeaf7efbccda68a"
};

firebase.initializeApp(config);


export default firebase;