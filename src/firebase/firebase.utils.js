import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDSiRiKHqF3plOc__1Ya0R13RXY3V5e_OM",
    authDomain: "react-commerce-7f93a.firebaseapp.com",
    databaseURL: "https://react-commerce-7f93a.firebaseio.com",
    projectId: "react-commerce-7f93a",
    storageBucket: "react-commerce-7f93a.appspot.com",
    messagingSenderId: "654796428442",
    appId: "1:654796428442:web:b5c8f937369c6ed2f37b23",
    measurementId: "G-7JDBZXKKM9"
}

firebase.initializeApp( config );

export const Auth = firebase.auth();
export const Firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );

export const SigninWithGoogle = () =>  Auth.signInWithPopup( provider ) ;

export default firebase;