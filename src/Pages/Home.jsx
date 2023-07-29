import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getContacts } from '../api/contacts'

export default function Home(){

    const [contatos, setContatos] = useState([])

    useEffect(() => {
        try {
            const data = getContacts()
            console.log({ data })
            setContatos(data)
        } catch (error) {
            console.log(error)
        }

    }, [])

    return(
        <ContainerMain>
            <Header>
                alfasoft contatos 
            </Header>
            <ContainerContacts>
            <Link to={'/createcontact'}>Adicionar</Link>
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
                                <button>Deletar</button>
                                <button>Alterar</button>
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
    background-color: blue;
    width: 100vw;
    height: 100%;
`

const Header = styled.div`
    height: 3rem;
    background-color: aqua;
`
const ListContacts = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: green;
`
const CardInformations = styled.div`
    width: 20rem;
    height: 10rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: beige solid 1px; 
    background-color: aqua;
    .Photo{
       background-color : purple;
       img{
        height: 141px;
        width: 141px;
       }
    }
    .Details{
        background-color: pink;
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
    margin-top: 3rem;
    background-color: yellow;
`