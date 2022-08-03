import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Card, Button, Col} from 'react-bootstrap'

function ComponenteProductos(props){
  const {data,id} = props
  const  [msj, setMsj] = useState('')
//  const navigate = useNavigate()
  //const id = (data.id)
/*  const seeMore = async (data) => {
      navigate("./Pages/Details/" + id)
  }
*/

  return(
      <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.thumbnail} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            {data.currency_id} ${data.price}
          </Card.Text>
          <Button variant="secondary" as={Link} to={'./Pages/Details/'+id}>Ver mas</Button>
          <Button variant="primary" onClick={() => setMsj('¡Gracias por su compra!') & console.log(id) }>Comprar</Button>
          <Card.Footer><strong>{msj}</strong></Card.Footer>
        </Card.Body>
      </Card>
      </Col>

    )
  

  
}
/*
      <div>
        <h4>{data.title}</h4>
        <img src={data.thumbnail} alt='{data.thumbnail_id'/>
        <p>{data.currency_id} ${data.price}</p>

        <button onClick={() => seeMore(data.id) & console.log(data.id)}>Ver mas</button>
        <button onClick={() => setMsj('¡Gracias por su compra!') & console.log(data.id) }>Comprar</button>
        <br /><strong>{msj}</strong>
      </div>
      
      <Button variant="secondary" onClick={() => seeMore(data.id) & console.log(data.id)}>Ver mas</Button>

      */


export default ComponenteProductos