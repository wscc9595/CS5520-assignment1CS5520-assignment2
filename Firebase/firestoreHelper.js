import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data) {
    try {
      await addDoc(collection(database, "Expenses"), data);
     
    } catch (err) {
      console.log(err);
    }
  }