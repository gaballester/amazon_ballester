// 1- me traigo firebase
import firebase from 'firebase/app'
// 2 - me traigo firestore
import 'firebase/firestore'
// 3 - copio mis credenciales de firebase
const firebaseConfig = {
    apiKey: "AIzaSyBG6ximUaLiP4JGIWLmaHSLaIQrzZoouIY",
    authDomain: "coderreactecommerce.firebaseapp.com",
    projectId: "coderreactecommerce",
    storageBucket: "coderreactecommerce.appspot.com",
    messagingSenderId: "37821433527",
    appId: "1:37821433527:web:4124afcdb65cb4ec872f32"
}
// 4 - inicializo firebase
firebase.initializeApp(firebaseConfig)
// 5 - inicializo firestore
const db = firebase.firestore()
// 6 - exporto firestore
export default db

