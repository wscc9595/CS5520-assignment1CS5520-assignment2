import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data) {
    console.log("fff");
    try {
        const docRef =  await addDoc(collection(database, "Expenses"), data);
        console.log('Data to be written: ', data);
      console.log("Document written with ID: ", docRef);
     
    } catch (err) {
      console.log(err);
    }}
//     database.collection("cities").add(data)
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
//   }