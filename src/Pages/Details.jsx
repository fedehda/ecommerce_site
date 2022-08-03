import { useEffect } from 'react';
import { useState } from 'react';
import {
    useParams
} from 'react-router-dom';
import {getProductDetail} from "../Services/ProductsRequest"
import '../Styles/Details.css'
import {Container} from 'react-bootstrap';


function Details(){
    
    const [loading, setLoading] = useState(true)
    const [detail,setDetail] = useState([])
    const {id} = useParams()
    const [msj, setMsj] = useState('')

    useEffect(
        ()=>{
                try{
                    const request = async ()=>{
                        const response = await getProductDetail(id)
                        console.log(response)
                        setDetail(response.data())
                        setLoading(false)
                }
                request()
            }catch(e){
                console.log(e)
            }
        },
        [id]
    )

if(loading){
    return(
        <div>Cargando, por favor espere</div>
    )
    }else{
        return (
            <div>
                <Container>
                <h3>{detail.title}</h3>
                <div id="left">
                <img src={detail.thumbnail} alt={detail.id} id="thumbnail"/>
                <p id="text">{detail.descriptions}</p>
                <p id="price">{detail.currency_id} ${detail.price}</p>
                <button onClick={() => setMsj('¡Gracias por su compra!') & console.log(id) }>Comprar</button>
                <br /><strong>{msj}</strong>
                <p id="text">{detail.warranty}</p>

                </div>
                


                    </Container>
            </div>
        )
    }

}
//                    {detail.map(detailsData=><DetailsProducts data={detailsData} key={detailsData.id} id={detailsData.id} />)}

    export default Details

    /*                <p className='card'>
                <p> Vea las imágenes del producto aquí abajo</p>

                <Card>

                <Card.Body>
                    <Carousel id="carousel">
                            <Carousel.Item>
                                <img
                                className="img-carousel"
                                src={detail.pictures[0].url} 
                                alt={detail.id}
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="img-carousel"
                                src={detail.pictures[1].url} 
                                alt={detail.id}
                                />

                            </Carousel.Item>

                            </Carousel>
                        </Card.Body>
                    </Card>

                    </p>*/