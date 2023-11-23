import { doc, getDoc } from "firebase/firestore";
import db from "../config/firebaseConfig.js";
import convertDateFromTimestamp from "../utils/dateConverter.js";

export default class UserService {
  static async getUser(id) {
    try {
      const userRef = doc(db, "users", id);
      const user = await getDoc(userRef);

      if (user.exists())
        return {
          id: user.id,
          nome: user.data().name,
          email: user.data().email,
          telefones: !user.data().phone
            ? "Não cadastrado"
            : user.data().phone.map((item) => {
                return { numero: item.phoneNumber, ddd: item.areaCode };
              }),
          data_criacao: convertDateFromTimestamp(user.data().createdAt.seconds),
          data_atualizacao: convertDateFromTimestamp(
            user.data().updatedAt.seconds
          ),
          ultimo_login: convertDateFromTimestamp(user.data().lastLogin.seconds),
        };

      return null;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
