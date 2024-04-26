//Mongo Config
import mongoose from "mongoose";
export const mongooseConfig=`mongodb://JatinOO7-py:98216841%40123@ac-fuqumtw-shard-00-00.ogbpgkq.mongodb.net:27017,ac-fuqumtw-shard-00-01.ogbpgkq.mongodb.net:27017,ac-fuqumtw-shard-00-02.ogbpgkq.mongodb.net:27017/?ssl=true&replicaSet=atlas-3lgdkw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=CityTour`






//Firebase Config
export const firebaseConfig = {
    apiKey: "AIzaSyAX5dMiBHCxJETgIaiy1ny1NSTEUZU2kqE",
    authDomain: "userbase-ad35a.firebaseapp.com",
    projectId: "userbase-ad35a",
    storageBucket: "userbase-ad35a.appspot.com",
    messagingSenderId: "700989088726",
    appId: "1:700989088726:web:d4edc3035bb62a71f93a77",
    measurementId: "G-L9P2E03SYN",
    storageBucket: "gs://userbase-ad35a.appspot.com"
  };
































// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);



// import zod from "zod";
// const loginZodObject = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(6).regex(/.*[!@#$%^&*()_-].*/)
// });

// const user1={
//     email: "soni1822004@gmail.com",
//     password: "98216841@123"
// }
// try{
//     loginZodObject.parse(user1);
//     console.log("Correct login Format");
// }catch(error){
//     console.log(error);
// }
// const {email, password}=user1;

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log("Aala re aala\n");
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
//     // ..
//   });


//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log("Signed in into\n");
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       console.log("UID IS hmm: "+uid);
//       // ...
//     } else {
//       // User is signed out
//       // ...
//       console.log("User is signed out")
//     }
//   });

//   signOut(auth).then(() => {
//     console.log("Entered Sign out Auth ");
//   }).catch((error) => {
//     // An error happened.
//   });


// import pkg from 'firebase-admin';
// const admin=pkg;
// admin.initializeApp({
//   credential: admin.credential.cert('./ServiceAcct.json')
// });

// function authenticateRequest(token) {
//     const accessToken = token;
  
//     admin.auth().verifyIdToken(accessToken)
//       .then(decodedToken => {
//         console.log("Yeh raha UID from token: "+decodedToken.uid);
//         // next();
//       })
//       .catch(error => {
//         console.error('Error verifying token:', error);
//         // res.status(401).send('Unauthorized');
//       });
//   }
// authenticateRequest(accessToken);

