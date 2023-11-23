export default class UserController {
  static async getUser(req, res) {
    res.send(req.params.id);
  }
}
