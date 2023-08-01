// v9 compat packages
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDdkea8ohDzigPVJxrwqAzr7iaRPf8kd8c",
    authDomain: "react-crud-app-fd98f.firebaseapp.com",
    projectId: "react-crud-app-fd98f",
    storageBucket: "react-crud-app-fd98f.appspot.com",
    messagingSenderId: "649722929560",
    appId: "1:649722929560:web:7acad617262d561e4c0bed",
    measurementId: "G-XGMN3VPKPF"
  };

  const Fireapp = firebase.initializeApp(firebaseConfig);

  export default Fireapp