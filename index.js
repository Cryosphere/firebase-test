import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/database';

import {
  getAuth
} from 'firebase/auth';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyApAVPx8g9ncyoyFM9AB-VsIVQFVbZimu8",
  authDomain: "kinoteka-cc589.firebaseapp.com",
  databaseURL: "https://kinoteka-cc589-default-rtdb.firebaseio.com",
  projectId: "kinoteka-cc589",
  storageBucket: "kinoteka-cc589.appspot.com",
  messagingSenderId: "626971331589",
  appId: "1:626971331589:web:4219ce873aff3fdaeba06c"
};

export const db = getFirestore(initializeApp(firebaseConfig));
export const auth = getAuth();

import firebase from 'firebase/app';

// Сохранение объекта в Firebase
const saveData = (key, data) => {
firebase.database().ref(key).set(data)
.then(() => {
console.log('Данные успешно сохранены в Firebase');
})
.catch((error) => {
console.error('Ошибка при сохранении данных в Firebase:', error);
});
};

// Загрузка объекта из Firebase
const loadData = (key) => {
return firebase.database().ref(key).once('value')
.then((snapshot) => {
console.log('Данные успешно загружены из Firebase');
return snapshot.val();
})
.catch((error) => {
console.error('Ошибка при загрузке данных из Firebase:', error);
});
};



const exampleData = {
name: 'John',
age: 30,
email: 'john@example.com'
};

const key = 'users/123';
saveData(key, exampleData)
.then(() => {
return loadData(key);
})
.then((data) => {
console.log('Загруженный объект:', data);
});