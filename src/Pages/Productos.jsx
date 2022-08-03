import React, {useEffect, useState} from "react";
import ComponenteProductos from "../Components/Products";
import {getProducts} from '../Services/ProductsRequest';
import { Row, Form, FormControl, Button } from "react-bootstrap";
//import {Button} from 'react-bootstrap'
//import SearchBar from "../Components/SearchBar";
//import { Link } from "react-router-dom";


function Productos(){


    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [buscar, setBuscar] = useState('')


 
    useEffect(
        ()=>{
            const request = async ()=>{
                try{
                    const response = await getProducts(buscar)
//                    console.log("response",response)
                    setProducts(response)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                }
                
            }
            request()
    },
    [buscar]
)

//para buscar con MercadoLibre

/*        setTimeout(() =>{
           getProducts(buscar)
            .then(response => {
                console.log("response", response); 
                setProducts(response.results)

            })
           .catch(error => console.log(error))

            setLoading(false)
           },2000)},
           [buscar]
           
    )*/

/*    useEffect(
        ()=>{
            console.log("productSearch")
            setProducts([])
        },
        [buscar]
    )
*/
    const searchFunction = (event)=>{
        const value = event.target.value
        setTimeout(()=>{
            setBuscar(value)
          },500)
    }

    if(loading){
        return(

         <div>Cargando...</div>
        )
        } else {
            const titulo = "Listado de productos React JS"
            

        return(
            <div>
                <h3> {titulo} </h3>

                    <Form className="searchBar" >

                        <FormControl
                            type="search"
                            placeholder="Búsqueda"
                            className="searchBar"
                            aria-label="searchBar"
                            styles={{
                                width: '18rem'
                            }}
                            onChange={searchFunction}
                        />
                    <Button name='button' variant="outline-secondary" type="reset" id="cleanButton" >Limpiar</Button>
                <Button 
                name='button'
                variant="secondary"  
                type="button" 
                id="searchButton"
                >Buscar</Button>
                    </Form>
                    
                <br/>
                <Row>
                {products.map((productsData, index)=><ComponenteProductos data={productsData.data()} key={productsData.id} id={productsData.id} />)}
                </Row>
               
               
            </div>
        )
    }
}


export default Productos


//{products.map((productsData)=><ComponenteProductos data={productsData} key={productsData.id} id={productsData.id} />)}
//para buscar con MercadoLibre