import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDs8ZIBKhKs3fqEp2reHPhWyl-z6quu5pw",
  authDomain: "nursing-app-2067d.firebaseapp.com",
  projectId: "nursing-app-2067d",
  storageBucket: "nursing-app-2067d.appspot.com",
  messagingSenderId: "1067178293451",
  appId: "1:1067178293451:web:727e056812bdf7b708834e",
  measurementId: "G-JWLC4Z6DGX",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const RealTimeDatabase = firebase.database();
export const NamesAndDiariesRef = RealTimeDatabase.ref("NamesAndDiaries");

export const pushNameAndDiary = ({ name, text }) => {
  NamesAndDiariesRef.push({ name, text });
};
export const pushEditDiary = ({ selectedId, diary }) => {
  NamesAndDiariesRef.child(selectedId).update({ text: diary });
};
