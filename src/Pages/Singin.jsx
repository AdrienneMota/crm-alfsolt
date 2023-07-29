import { useState } from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import loginAuth from "../api/auth"


export default function Signin(){
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleAuth = (evt) => {
    const { name, value } = evt.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  function LoginUser(e) {
    e.preventDefault();
    try {
        loginAuth(data)
        navigate("/")
      } catch (error) {
        alert("Houve um erro no login. Verifique os campos preenchidos.")
        console.log(error)
      }
    }

  return(
    <Container>
        <ContainerForm>
            <p>Login</p>
            <FormCard onSubmit={LoginUser}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.user_name}
                onChange={handleAuth}
                required="required"
            />
            <input
                type="password"
                name="password"
                placeholder="Senha"               
                value={data.password}
                onChange={handleAuth}
                required="required"
            />
             <button>Entrar</button>
            </FormCard>
            <Link to={"/signup"}>Primeira vez? Crie uma conta!</Link>
        </ContainerForm>
    </Container>   
    )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  a{
    text-decoration: none;
    margin: 25px;
    color: #543f7b;
  }
  @media (max-width: 768px) {
    background-color: #d7a7fc;
  }
`
const ContainerForm = styled.div`
  background-color: #d7a7fc;
  border: 2px solid #a359a0;
  border-radius: 5px;
  width: 23rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    border: none;
  }
`
const FormCard = styled.form`
  width: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
   width: 20rem;
   height: 2.5rem;
   border-radius: 5px;
   border: 1px solid #f4f4f4;
   margin: 10px;
  }
  button{
        width: 20rem;
        height: 2.5rem;
        border-radius: 5px;
        border: none;
        background-color: #a359a0;
        color: #f4f4f4;
        margin-top: 1rem;
    }
`