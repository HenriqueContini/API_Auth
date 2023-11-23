import UserService from "../services/UserService.js";

export default class UserController {
  static async getUser(req, res) {
    try {
      const id = req.params.id;

      if (!id) {
        return res
          .status(400)
          .json({ mensagem: "É necessário enviar um ID de usuário" });
      }

      const userData = await UserService.getUser(id);

      if (!userData)
        return res.status(404).json({ mensagem: "Usuário não encontrado" });

      return res.status(200).json(userData);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Ocorreu algum erro interno" });
    }
  }
}
