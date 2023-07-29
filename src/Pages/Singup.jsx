import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { createUser } from '../api/user'

export default function Singup() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    
    const handleSingup = (e) => {
        const {name, value} = e.target
        setUser((prev) => ({...prev, [name]:value}))
    }

    function postUser(e){
        e.preventDefault()

        try {
            createUser(user)
            alert('Usuário cadastrado com sucesso')
            navigate("/signin")
        } catch (error) {
            alert('Erro no cadastro')
            console.log(error)
        }
    }


    return(
        <ContentSingup>
            <FormUser onSubmit={postUser}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={user.name}
                    onChange={handleSingup}
                    required="required"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"               
                    value={user.email}
                    onChange={handleSingup}
                    required="required"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"               
                    value={user.password}
                    onChange={handleSingup}
                    required="required"
                />
                {/* <input
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirme a senha"
                    value={data.confirmPassword}
                    onChange={handleInputChange}
                    required="required"
                /> */}
                <button>Cadastrar</button>
                <Link to={"/singin"}>Fazer Login!</Link>
          </FormUser>
        </ContentSingup>
    )
}

const ContentSingup = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  a{
    text-decoration: none;
    color: #543f7b;

  }
  @media (max-width: 768px) {
    background-color: #d7a7fc;
  }

`
const FormUser = styled.form`
  background-color: #d7a7fc;
  border: 2px solid #a359a0;
  border-radius: 5px;
  width: 23rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  input{
   width: 20rem;
   height: 2.5rem;
   border-radius: 5px;
   border: 1px solid #f4f4f4;
  }
  button{
        width: 20rem;
        height: 2.5rem;
        border-radius: 5px;
        border: none;
        background-color: #a359a0;
        color: #f4f4f4;
        margin-top: 2rem;
    }
  @media (max-width: 768px) {
    border: none;
  }
`