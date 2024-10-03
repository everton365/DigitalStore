import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeaderLogin from "../../components/headerLogin/headerLogin";

const Cadastro = () => {
  const [name, setName] = useState("");
  const [CPF, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [Bairro, setBairro] = useState("");
  const [Cidade, setCidade] = useState("");
  const [CEP, setCep] = useState("");
  const [complemento, setComplemento] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem");
      return;
    }

    // Limpa a mensagem de erro se a validação passar
    setErrorMessage("");

    // Aqui você pode lidar com o cadastro, como enviar os dados para uma API
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Endereço:", address);
    console.log("Senha:", password);
  };

  return (
    <>
      <Container>
        <HeaderLogin />
        <RegisterBox>
          <Title>Preencha os dados para criar sua conta</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="cpf"
              value={CPF}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              required
            />

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

            <Title>Informações de Entrega</Title>

            <Input
              type="text"
              placeholder="Endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Bairro"
              value={Bairro}
              onChange={(e) => setBairro(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Cidade"
              value={Cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="CEP"
              value={CEP}
              onChange={(e) => setCep(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Insira complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              required
            />
            <Input
              type="Password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              type="Password"
              placeholder="confirmar senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <Button type="submit">Cadastrar</Button>
          </Form>
          <FooterText>
            Já tem uma conta? <Link to="/Login">Faça login</Link>
          </FooterText>
        </RegisterBox>
      </Container>
    </>
  );
};

export default Cadastro;

// Estilos com styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

const RegisterBox = styled.div`
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

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
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
