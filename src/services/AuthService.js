import {
  collection,
  where,
  getDocs,
  query,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import bcrypt from "bcrypt";
import db from "../config/firebaseConfig.js";
import convertDateFromTimestamp from "../utils/dateConverter.js";

const authRef = collection(db, "users");

export default class AuthService {
  static async saveUser(data) {
    try {
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(data.password, salt);

      const newUser = await addDoc(authRef, {
        name: data.name,
        email: data.email,
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLogin: new Date(),
        phone: data.phone,
      });

      return newUser.id;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  static async getUserData(id) {
    try {
      const userRef = doc(db, "users", id);
      const user = await getDoc(userRef);

      if (user.exists())
        return {
          id: user.id,
          data_criacao: convertDateFromTimestamp(user.data().createdAt.seconds),
          data_atualizacao: convertDateFromTimestamp(
            user.data().updatedAt.seconds
          ),
          ultimo_login: convertDateFromTimestamp(user.data().lastLogin.seconds),
          token: user.id,
        };

      return null;
    } catch (error) {
      throw new Error(error.message);
    }
  }

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
