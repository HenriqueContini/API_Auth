import { verifyToken } from "../utils/tokenJWT.js";

export default function tokenMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const error = verifyToken(token);

  if (!error) return next();

  return res.send({ mensagem: error });
}
