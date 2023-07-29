import styled from 'styled-components'

const contatos = [
    { 
        id: 1, 
        nome: 'fulano',
        email: 'fulano@gmail.com',
        contato: '9999999999',
        image: 'https://i.pinimg.com/564x/ee/19/6a/ee196a048191fcba45a2a1dab90e23e8.jpg'
    },
    { 
        id: 2, 
        nome: 'cicrano',
        email: 'fulano@gmail.com',
        contato: '9999999999',
        image: 'https://i.pinimg.com/564x/ee/19/6a/ee196a048191fcba45a2a1dab90e23e8.jpg'
    },
    { 
        id: 3, 
        nome: 'fulano',
        email: 'fulaninho@gmail.com',
        contato: '9999999999',
        image: 'https://i.pinimg.com/564x/ee/19/6a/ee196a048191fcba45a2a1dab90e23e8.jpg'
    },

]

export default function Home(){
    return(
        <ContainerMain>
            <Header>
                alfasoft contatos 
            </Header>
            <ContainerContacts>
                <ListContacts>
                {
                    contatos?.map( 
                        (contato) => 
                        <CardInformations key={'cardinformations-box' + contato.id}>
                            <div className='Photo'>
                                <img src={contato.image}/>
                            </div>
                            <div className='Details'>
                                <p>Nome: {contato.nome} </p>
                                <p>Email: {contato.email} </p>
                                <p>Telefone: {contato.nome} </p>
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