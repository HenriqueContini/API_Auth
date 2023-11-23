<h1 align="center">🔒 API Auth 🔑</h1>

### 🖥️ Projeto

API RESTful para autenticação de usuários, que possui as operações de SignUp, SignIn e recuperação de dados do usuário (GetUser).

### ⚙️ Tecnologias

- Node.js
- JavaScript
- Express
- Firebase
- jsonwebtoken
- bcrypt

## 🏴󠁶󠁵󠁭󠁡󠁰󠁿 Endpoints

### 📌 Sign Up (cadastro)

#### Request `POST /auth/signUp`
```
{
  "nome": "Teste",
  "email": "teste@gmail.com",
  "senha": "senhasecreta",
  "telefones": [
    {
      "numero": "123456789",
      "ddd": "11"
    },
    {
      "numero": "987654321",
      "ddd": "19"
    }
  ]
}
```

#### Response
```
{
  "id": "ID_usuario",
  "data_criacao": "23/11/2023 10:32:55",
  "data_atualizacao": "23/11/2023 10:32:55",
  "ultimo_login": "23/11/2023 10:32:55",
  "token": "tokenJWT"
}
```
### 📌 Sign In (login)

#### Request `POST /auth/signIn`
```
{
  "email": "teste@gmail.com",
  "senha": "senhasecreta"
}
```

#### Response
```
{
  "id": "ID_usuario",
  "data_criacao": "23/11/2023 10:32:55",
  "data_atualizacao": "23/11/2023 10:32:55",
  "ultimo_login": "23/11/2023 10:38:40",
  "token": "tokenJWT"
}
```

### 📌 Get User (buscar usuário)

#### Request `GET /user/getUser/:ID_usuario`
Header Authentication com valor "Bearer {tokenJWT}"

#### Response
```
{
  "id": "ID_usuario",
  "nome": "Teste",
  "email": "teste@gmail.com",
  "telefones": [
    {
      "numero": "123456789",
      "ddd": "11"
    },
    {
      "numero": "987654321",
      "ddd": "19"
    }
  ],
  "data_criacao": "23/11/2023 10:19:04",
  "data_atualizacao": "23/11/2023 10:19:04",
  "ultimo_login": "23/11/2023 10:38:40"
}
```
