import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getApp } from "firebase/app";
import { firebaseConfig } from "../config.js";
import zod from "zod";
import pkg from 'firebase-admin';
import { fileURLToPath } from 'url';
import path from 'path';
const admin=pkg;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//Initialize Admin in order to authenticate use just the access tokens
const __filename = fileURLToPath(import.meta.url);
const serviceAccountPath = path.join(path.dirname(__filename), 'ServiceAcct.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath)
});

export const register=async (req,res)=>{
    console.log("entered register")
    const {email, password}={...req.body.user};
    const user1={
        email,password
    }
    const loginZodObject = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6).regex(/.*[!@#$%^&*()_-].*/)
    });
    
    try{
        loginZodObject.parse(user1);
        console.log("Correct login Format");
    }catch(error){
        console.log("There is a problem with the type of mail and password provided");
        console.log(error);
    }

    let UID;
    let accessToken;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        console.log(user);
        UID=user.uid;
        accessToken=user.accessToken;
        res.status(200).json({UID,accessToken});
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });

}
export const login=async (req,res)=>{
    // const user1={
    //     email: req.user.email,
    //     password: req.user.password
    // }
    console.log("entered login")
    const {email, password}={...req.body.user};
    // console.log(req.body);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Signed in into\n With access token:");
      console.log(user.accessToken);
      res.status(200).send({accessToken:[user.accessToken]});
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
        res.status(200).send(`${errorMessage}`);
    });

}
export const Authentication=(req,res)=>{
        const accessToken = req.headers.authorization.split(' ')[1];
      
        admin.auth().verifyIdToken(accessToken)
          .then(decodedToken => {
            req.uid = decodedToken.uid;
            const uidd=req.uid;
            // res.status(200).send({uidd})
          })
          .catch(error => {
            console.error('Error verifying token:', error);
            res.status(401).send('Unauthorized');
          });
      
}

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
