const firebaseConfig = {
    apiKey: "AIzaSyA0Yv8WO6S7anbR43QWK8czhXCQV2Wba8U",
    authDomain: "crisis-fccd1.firebaseapp.com",
    databaseURL: "https://crisis-fccd1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "crisis-fccd1",
    storageBucket: "crisis-fccd1.firebasestorage.app",
    messagingSenderId: "236121315864",
    appId: "1:236121315864:web:33940a352cdc98ef91816d",
    measurementId: "G-XX1EB4BMP3"
};

// const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.database();

// const isAdmin = () => localStorage.getItem('role') === 'admin';
// const updateRoleStatus = () => {
//     document.getElementById('role-status').innerText = `Role: ${isAdmin() ? 'Admin' : 'Not Admin'}`;
// };

// document.getElementById('toggle-admin').addEventListener('click', () => {
//     if (isAdmin()) {
//         localStorage.removeItem('role');
//     } else {
//         localStorage.setItem('role', 'admin');
//     }
//     updateRoleStatus();
// });

// updateRoleStatus();

// const tristanRef = db.ref('tristan');
// let tristanValue = false; 

// const updateTristanStatus = () => {
//     document.getElementById('tristan-status').innerText = `Tristan: ${tristanValue}`;
// };

// document.getElementById('toggle-tristan').addEventListener('click', () => {
//     if (isAdmin()) {
//         if(tristanValue === true){localStorage.setItem("tristan", 1)}else{localStorage.removeItem("tristan")};
//         tristanValue = !tristanValue;
//         tristanRef.set(tristanValue); 
//         console.log("changed var")
//     } else {
//         alert('Only an admin can change the Tristan variable.');
//     }
// });

// tristanRef.on('value', (snapshot) => {
//     console.log("changed value");
//     tristanValue = snapshot.val();
//     updateTristanStatus();
// });

// updateTristanStatus();

firebase.initializeApp(firebaseConfig);

    // Référence à la base de données
    const db = firebase.database();
    const tristanRef = db.ref('tristan');

    // Gérer la variable Tristan
    let tristanValue = false;

    document.getElementById('toggle-tristan').addEventListener('click', () => {
      tristanValue = !tristanValue;
      tristanRef.set(tristanValue); // Mettre à jour Firebase
    });

    tristanRef.on('value', (snapshot) => {
      tristanValue = snapshot.val();
      console.log(`Tristan: ${tristanValue}`);
    });