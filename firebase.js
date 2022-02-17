import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCK967iXHGY7cn46ekEw7EN11pmHtuKTH0',
  authDomain: 'project-data-5f779.firebaseapp.com',
  projectId: 'project-data-5f779',
  storageBucket: 'project-data-5f779.appspot.com',
  messagingSenderId: '170184497689',
  appId: '1:170184497689:web:170bcbe9615cf00d222888',
  measurementId: 'G-B01V4K3ZBC',
}
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db
