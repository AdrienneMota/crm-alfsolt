import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { deleteContact, getContactsByUserId } from '../api/contacts'
import ContactDetails from './ContactDetails'

export default function Home(){   
     const navigate = useNavigate()
    const [contatos, setContatos] = useState([])

    useEffect(() => {
        handleGetContacts();
    }, [])

    function handleGetContacts() {
        try {
            const session = JSON.parse(localStorage.getItem("session"))
            if(!(session && session.id)){
                navigate('/signin')
                return;
            }

            const data = getContactsByUserId(session.id)
            setContatos(data)
        } catch (error) {
            console.log(error)
        }

    }

    function handleEditContact(contactId) {
        navigate(`/createcontact/${contactId}`)
    }

    function handleDeleteContact(contactId) {
        const result = window.confirm("Vc tem certeza que deseja excluir esse contato?")
        if(!result) return;
        deleteContact(contactId);
        handleGetContacts();
    }

    function handleDetailsContact(contactId) {
        navigate(`/contactdetails/${contactId}`)
    }

    return(
        <ContainerMain>
            <Header>
                <span>
                Alfasoft contatos 
                </span>
            <Link to={'/signin'} onClick={() => localStorage.removeItem("session")}>Sair</Link>
            </Header>
            <ContainerContacts>
                <Title>
                    <h3>Contatos</h3>
            <Link to={'/createcontact'}>Adicionar</Link>

                </Title>
                <ListContacts>
                {
                    contatos?.map( 
                        (contato) => 
                        <CardInformations key={'cardinformations-box' + contato.id}>
                            <div className='Photo'>
                                <img src={contato.image_url}/>
                            </div>
                            <div className='Details'>
                                <p>Nome: {contato.name} </p>
                                <p>Email: {contato.email} </p>
                                <p>Telefone: {contato.contact} </p>
                                <button type="button" onClick={() => handleDeleteContact(contato.id)}>Excluir</button>
                                <button type="button" onClick={() => handleEditContact(contato.id)}>Alterar</button>
                                <Link to={`/contactdetails/${contato.id}`} >Details</Link>
                            </div>
                            </CardInformations>                
                    )
                }
                </ListContacts>
            </ContainerContacts>
        </ContainerMain>
    )
}

const ContainerMain = styled.div`
    width: 100vw;
    height: 100%;
`
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 50px 0 50px;
    h3 {
        font-size: 2rem;
    }
    
`

const Header = styled.div`
    height: 3rem;
    background-color: aqua;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px 0 50px;

    span {
        font-size: 20px;
    }
`
const ListContacts = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`
const CardInformations = styled.div`
    width: 20rem;
    height: 10rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: beige solid 1px; 
    .Photo{
       img{
        height: 141px;
        width: 141px;
       }
    }
    .Details{
        height: 141px;
        width: 141px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
            font-size: 13px;
        }
    }
   
`
const ContainerContacts = styled.div`
    margin-top: 20px;
`