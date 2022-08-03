import React, {useEffect, useState} from "react";
import ComponenteProductos from "../Components/Products";
import {getProducts} from '../Services/ProductsRequest';
import { Row, Form, FormControl, Button } from "react-bootstrap";
import SearchBar from "../Components/SearchBar";
import { Link } from "react-router-dom";


function Productos(){


    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [buscar, setBuscar] = useState('undefined')


 
    useEffect(
        ()=>{
        setTimeout(() =>{
           getProducts(buscar)
            .then(response => {
                console.log("response", response); 
                setProducts(response.results)

            })
           .catch(error => console.log(error))

            setLoading(false)
           },2000)},
           [buscar]
           
    )

    useEffect(
        ()=>{
            console.log("productSearch")
            setProducts([])
        },
        [buscar]
    )

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
                                width: '7rem'
                            }}
                            onChange={searchFunction}
                        />
                    </Form>
                <br/>
                <Row>
                {products.map(productsData=><ComponenteProductos data={productsData} key={productsData.id} id={productsData.id} />)}
                </Row>
               
               
            </div>
        )
    }
}


export default Productos
