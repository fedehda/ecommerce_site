//import {getProducts} from '../Services/ProductsRequest'
import {Form, FormControl} from 'react-bootstrap'
//import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../Styles/SearchBar.css'

function SearchBar(){

//  const [products, setProducts] = useState([]);
//  const [loading, setLoading] = useState(true);
  const [buscar, setBuscar] = useState('');

/*useEffect(
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
/*useEffect(
  ()=>{
      console.log("productSearch")
      setProducts([])
  },
  [buscar]
)
useEffect(
  ()=>{
      try{
          const request = async ()=>{
              const response = await getProducts(products)
              console.log(response)
              setLoading(false)
              setProducts(response)
          }
          request()


      }catch(e){
          console.log(e)
      }
  }, [buscar]
 
)

/*  const handleChange = (query)=>{
        
   /* const value = event.target.value
    setTimeout(()=>{
    setLoading(true)
    setBuscar(value)
},1000)

    var query = document.getElementById("searchBar").value
    console.log(query)
    setBuscar(query)
}*/

const searchFunction = (event)=>{
        
  const value = event.target.value
  setTimeout(()=>{
  setBuscar(value)
},500)


}
  return(
      <Form className="searchBar" >
        <FormControl
          type="search"
          placeholder="Búsqueda"
          className="searchBar"
          aria-label="searchBar"
          onChange={searchFunction}
          value={buscar}
          
        />


      </Form>
  )
}

export default SearchBar

/* Old code
        <div id='right'>
          <Button name='button' variant="outline-secondary" type="reset" id="cleanButton" >Limpiar</Button>
          <Button 
                name='button'
                variant="secondary"  
                type="button" 
                id="searchButton"
                >Buscar</Button>
        </div>

        */