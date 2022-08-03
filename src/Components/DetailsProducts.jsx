import {Card, Carousel} from 'react-bootstrap' ;
import {useState, useParams} from 'react'

function DetailsProducts(props){


    const {data} = props
    const [msj, setMsj] = useState('')
    const imageStyles = { maxWidth: '18rem', maxHeight: '20rem' }
    const [loading, setLoading] = useState(true)
    const [detail,setDetail] = useState([])
    const {id} = useParams()

    return (
        <div>
        <h3>{detail.title}</h3>
        <img src={detail.thumbnail} alt={detail.id} />
        <p>{detail.description}</p>
        <p>{detail.currency_id} {detail.price}</p>
        <p>{detail.warranty}</p>
        <button onClick={() => setMsj('¡Gracias por su compra!') & console.log(detail.id) }>Comprar</button>
        <br /><strong>{msj}</strong>
        <p> Vea las imágenes del producto aquí abajo</p>
        
        <div className='card'>
        <Card  style={{ width: '18rem', height: '20rem'}}>

        <Card.Body>
            <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail.pictures[0].url} 
                        alt={detail.id}
                        style={imageStyles}

                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail.pictures[1].url} 
                        alt={detail.id}
                        style={imageStyles}


                        />

                    </Carousel.Item>




            </Carousel>


            </Card.Body>
            </Card>
            </div>
        

    </div>
    )

}

export default DetailsProducts