import { useNavigate, Link, useParams } from "react-router-dom"
import { createContact, getContactById, updateContact } from "../api/contacts"
import styled from 'styled-components'
import { useEffect, useState } from "react"

export default function CreatContact(){
    const navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    image_url: '',
  })
  const { id: contactId } = useParams();

  useEffect(() => {
    if(contactId) {
      const contact = getContactById(contactId);
      setData(contact)
    }
  }, []) 

  const handleContact = (evt) => {
    const { name, value } = evt.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  function createNewContact(e) {
    e.preventDefault();
    try {
        const session = JSON.parse(localStorage.getItem("session"))
        if(!session){
            alert('Faça login')
            navigate('/singin')
        }
        const contact = {...data, user_id : session?.id}
        contactId ? updateContact(contact) : createContact(contact)
        alert('Contato salvo')
        navigate("/")
      } catch (error) {
        alert("Houve um erro no login. Verifique os campos preenchidos.")
        console.log(error)
      }
    }

  return(
    <Container>
        <ContainerForm>
            <p>Contacts</p>
            <FormCard onSubmit={createNewContact}>
            <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={data.name}
                    onChange={handleContact}
                    required="required"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"               
                    value={data.email}
                    onChange={handleContact}
                    required="required"
                />
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"               
                    value={data.contact}
                    onChange={handleContact}
                    required="required"
                />
                <input
                    type="text"
                    name="image_url"
                    placeholder="Url imagem"               
                    value={data.image_url}
                    onChange={handleContact}
                    required="required"
                />
             <button>Salvar</button>
            </FormCard>
            <Link to={"/Home"}>Cancelar</Link>
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
const Title = styled.h1`
  margin: 3.5rem 0px 2rem 0px;
  font-size: 50px;
  font-family: 'Alkatra', cursive;;
  font-weight: bold;
  color: #543f7b;
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