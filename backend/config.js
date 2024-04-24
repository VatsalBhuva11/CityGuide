//Mongo Config
import mongoose from "mongoose";
const mongooseConfig=`mongodb://JatinOO7-py:98216841%40123@ac-fuqumtw-shard-00-00.ogbpgkq.mongodb.net:27017,ac-fuqumtw-shard-00-01.ogbpgkq.mongodb.net:27017,ac-fuqumtw-shard-00-02.ogbpgkq.mongodb.net:27017/?ssl=true&replicaSet=atlas-3lgdkw-shard-0&authSource=admin&retryWrites=true&w=majority&appName=CityTour`

mongoose.connect(mongooseConfig)
.then(con=>{
    // console.log(con.connections);
    console.log("MongoDB Connect Sucessfull");
}).catch(err=>console.log(err));



// stsTokenManager: StsTokenManager {
//     refreshToken: 'AMf-vBwdPKD_qOWqujMYH8CH9V62BWv0-cBGYdA_UfDqfoJLr-KWjpgynFy-ghzl5jYH-kzHJ-kZqnUUHm_FFe1-DuCti1iMGWnit18fS15IzfxBdy8PVaqsSZBEPYCGLQwqQ4ewUl3h7pRed6r5gL_4EsZnybBOAGRUE2Ozxd3fPv0cTQLUehRDeYlwSlWQi-UshwZz7_5kVmr58Lviism4h3_00w7Erw',
//     accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkOWI0ZTY5ZTMyYjc2MTVkNGNkN2NhZmI4ZmM5YjNmODFhNDFhYzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdXNlcmJhc2UtYWQzNWEiLCJhdWQiOiJ1c2VyYmFzZS1hZDM1YSIsImF1dGhfdGltZSI6MTcxMzk3MzA5OCwidXNlcl9pZCI6IkprYUJKbTRRcVVldWVXTVV5NWlnSEhVaVI2cDIiLCJzdWIiOiJKa2FCSm00UXFVZXVlV01VeTVpZ0hIVWlSNnAyIiwiaWF0IjoxNzEzOTczMDk4LCJleHAiOjE3MTM5NzY2OTgsImVtYWlsIjoic29uaTE4MjIwMDRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNvbmkxODIyMDA0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qaRb12Dbyvf-0b4I7zDCeHJMwyBPab09a6cWJ-SW1I4SF5Zjb4Cc8krY8co1lzc2dixOmWJWizzTtsbo5_b7qhavyQI31d5K2rtiy45LDzjaTqqVbhC3MOXjhEcZfTX0d8kyfkZR84n3rFRZcavQeBKEJXEOlqOm2Hpo2cB0LThpSjtjnlkVziMEGvbKjVLqm-vB6BL6u3oTgFpnTJIWh0oIALEIcBReBhLMUIgmYH7m1gMcjtsJXsnLJ9XeK2zxV0_GuqpPpw-SLfRHzhpMlAVE_CCxwf7hUGqf5NqunPRC2MjDP1Kjqvv55KnyrzEw0fR3mzWLi6xzP31CU4KItA',
//     expirationTime: 1713976698716
//   },
//   const accessToken= 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkOWI0ZTY5ZTMyYjc2MTVkNGNkN2NhZmI4ZmM5YjNmODFhNDFhYzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdXNlcmJhc2UtYWQzNWEiLCJhdWQiOiJ1c2VyYmFzZS1hZDM1YSIsImF1dGhfdGltZSI6MTcxMzk3MzA5OCwidXNlcl9pZCI6IkprYUJKbTRRcVVldWVXTVV5NWlnSEhVaVI2cDIiLCJzdWIiOiJKa2FCSm00UXFVZXVlV01VeTVpZ0hIVWlSNnAyIiwiaWF0IjoxNzEzOTczMDk4LCJleHAiOjE3MTM5NzY2OTgsImVtYWlsIjoic29uaTE4MjIwMDRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInNvbmkxODIyMDA0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.qaRb12Dbyvf-0b4I7zDCeHJMwyBPab09a6cWJ-SW1I4SF5Zjb4Cc8krY8co1lzc2dixOmWJWizzTtsbo5_b7qhavyQI31d5K2rtiy45LDzjaTqqVbhC3MOXjhEcZfTX0d8kyfkZR84n3rFRZcavQeBKEJXEOlqOm2Hpo2cB0LThpSjtjnlkVziMEGvbKjVLqm-vB6BL6u3oTgFpnTJIWh0oIALEIcBReBhLMUIgmYH7m1gMcjtsJXsnLJ9XeK2zxV0_GuqpPpw-SLfRHzhpMlAVE_CCxwf7hUGqf5NqunPRC2MjDP1Kjqvv55KnyrzEw0fR3mzWLi6xzP31CU4KItA'


// uid: 'JkaBJm4QqUeueWMUy5igHHUiR6p2'





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

