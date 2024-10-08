import React, { useState } from "react";
import styled from "styled-components";
import "./login.css";
import { Link } from "react-router-dom";
import HeaderLogin from "../../components/headerLogin/headerLogin";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode lidar com o login, como fazer uma requisição à API
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <>
      <HeaderLogin />
      <Container>
        <LoginBox>
          <Title>Digite seu e-mail para iniciar sessão</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Entrar</Button>
          </Form>

          <FooterText>
            Não tem uma conta? <Link to="/cadastro">Registre-se</Link>
          </FooterText>
        </LoginBox>
      </Container>
    </>
  );
};

export default App;

// Estilos com styled-components
const Container = styled.div`
  display: flex;
  margin-top: -80px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const LoginBox = styled.div`
  background-color: #ffffff;
  padding: 40px;
  width: 100%;

  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    border-color: #c92071;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #c92071;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a6175a;
  }
`;

const FooterText = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;

  a {
    color: #c92071;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
