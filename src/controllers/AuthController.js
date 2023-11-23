import AuthService from "../services/AuthService.js";

export default class AuthController {
  static async signUp(req, res) {
    try {
      const data = {
        name: req.body.nome,
        email: req.body.email,
        password: req.body.senha,
        phone: !req.body.telefones
          ? null
          : req.body.telefones.map((item) => {
              return {
                areaCode: item.ddd,
                phoneNumber: item.numero,
              };
            }),
      };

      if (!data.name || !data.email || !data.password) {
        return res
          .status(400)
          .json({ mensagem: "Campos: nome, email e senha são obrigatórios" });
      }

      if (await AuthService.checkIfEmailExists(data.email)) {
        return res.status(400).json({ mensagem: "E-mail já existente" });
      }

      const userData = await AuthService.signUp(data);

      return res.status(201).json(userData);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Ocorreu algum erro interno" });
    }
  }

  static async signIn(req, res) {
    try {
      const data = {
        email: req.body.email,
        password: req.body.senha,
      };

      if (!data.email || !data.password) {
        return res
          .status(400)
          .json({ mensagem: "Campos: email e senha são obrigatórios" });
      }

      const userId = await AuthService.checkIfEmailExists(data.email);

      if (!userId) {
        return res
          .status(401)
          .json({ mensagem: "Usuário e/ou senha inválidos" });
      }

      const token = await AuthService.signIn(userId, data.password);

      if (!token) {
        return res
          .status(401)
          .json({ mensagem: "Usuário e/ou senha inválidos" });
      }

      const userData = await AuthService.getUserData(userId);
      return res.status(200).json({ ...userData, token });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "Ocorreu algum erro interno" });
    }
  }
}
