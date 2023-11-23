import jwt from "jsonwebtoken";

function generateToken(id) {
  try {
    const token = jwt.sign({ id }, process.env.JWTsecret, { expiresIn: "1m" });
    return token;
  } catch (error) {
    console.log(error);
    throw new Error("Ocorreu um erro ao tentar gerar um Token");
  }
}

export { generateToken };
