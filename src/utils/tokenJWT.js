import jwt from "jsonwebtoken";

function generateToken(id) {
  try {
    const token = jwt.sign({ id }, process.env.JWTsecret, { expiresIn: "30m" });
    return token;
  } catch (error) {
    console.log(error);
    throw new Error("Ocorreu um erro ao tentar gerar um Token");
  }
}

function verifyToken(token) {
  try {
    jwt.verify(token, process.env.JWTsecret);

    return null;
  } catch (error) {
    if (error.name == "TokenExpiredError") {
      return "Sessão inválida";
    }

    return "Não autorizado";
  }
}

export { generateToken, verifyToken };
