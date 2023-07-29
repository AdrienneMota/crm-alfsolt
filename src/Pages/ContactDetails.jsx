import { useNavigate, Link, useParams } from "react-router-dom"
import styled from 'styled-components'
import { useEffect, useState } from "react"
import { getContactById } from "../api/contacts"

export default function ContactDetails(){
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
        }else{
          navigate('/Home')
        }
      }, []) 
    return(
      <ContainerDetails>
          <Details>
            <div className='Photo'>
              <img src={data.image_url}/>
          </div>
          <div className='Details'>
              <p>Nome: {data.name} </p>
              <p>Email: {data.email} </p>
              <p>Telefone: {data.contact} </p>
              <Link to='/'>Voltar para home</Link>
          </div> 
          </Details>
          </ContainerDetails>
       
    )
}

const ContainerDetails = styled.div`
  width: 100vw;
  height: 100hw;
  display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
`

const Details = styled.div`
    width: 20rem;
    height: 10rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: beige solid 1px; 
    background-color: aqua;
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