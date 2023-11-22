import AuthService from "../services/AuthService.js";

export default class AuthController {
  static async signUp(req, res) {
    try {
      const data = {
        name: req.body.nome,
        email: req.body.email,
        password: req.body.senha,
        phone: req.body.telefone.map((item) => {
          return {
            areaCode: item.ddd,
            phoneNumber: item.numero,
          };
        }),
      };

      if (!data.name || !data.email || !data.password) {
        return res
          .status(400)
          .json({ mensagem: "Campo: nome, email e senha são obrigatórios" });
      }

      if (await AuthService.checkIfEmailExists(data.email)) {
        return res.status(400).json({ mensagem: "E-mail já existente" });
      }

      res.send("OK");
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Ocorreu algum erro interno" });
    }
  }
}
