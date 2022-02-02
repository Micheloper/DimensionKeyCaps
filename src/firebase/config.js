import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw_bDYk1GATgFc0F-nO4h1ZWzTfGp7vEI",
  authDomain: "dimensionkeycaps.firebaseapp.com",
  projectId: "dimensionkeycaps",
  storageBucket: "dimensionkeycaps.appspot.com",
  messagingSenderId: "1041339369293",
  appId: "1:1041339369293:web:e19ce9f91fb30ad3ba9904"
};

const app = firebase.initializeApp(firebaseConfig)


export const getFirestore = () => {
    return firebase.firestore(app)
}

// export const db = getFirestore()