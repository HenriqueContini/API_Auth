import { collection, where, getDocs, query } from "firebase/firestore";
import db from "../config/firebaseConfig.js";

const authRef = collection(db, "users");

export default class AuthService {
  static async checkIfEmailExists(email) {
    try {
      const response = await getDocs(
        query(authRef, where("email", "==", email))
      );

      const aux = [];

      response.forEach((doc) => {
        aux.push(doc.id);
      });

      if (aux.length > 0) {
        return true;
      }

      return false;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
