import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const config = {
    // Your web app's Firebase configuration

    
}
firebase.initializeApp(config)
const db = firebase.firestore()

export const dbMenuRef = db.collection('menu')
export const dbOrderRef = db.collection('orders')
export const firebaseAuth = firebase.auth()