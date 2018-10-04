import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import 'firebase/firestore'

Vue.use(VueFirestore)

const config = {
    apiKey: "AIzaSyDlxhs9sd8m_qWoqKXy1K-2XXfZxa6UUoQ",
    authDomain: "beetle-demo.firebaseapp.com",
    databaseURL: "https://beetle-demo.firebaseio.com",
    projectId: "beetle-demo",
    storageBucket: "beetle-demo.appspot.com",
    messagingSenderId: "68357144215"
}

const firebaseApp = Firebase.initializeApp(config)
const firestore = firebaseApp.firestore();
const storage = firebaseApp.storage().ref();

export { firestore, storage} 

const settings = { timestampsInSnapshots: true};
firestore.settings(settings);