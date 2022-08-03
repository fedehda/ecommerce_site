import React,{Component} from 'react'
import Productos from './Productos'
import {Container} from 'react-bootstrap'
import SearchBar from '../Components/SearchBar'

class Home extends Component{ 

  render(){ 

    return(
      <Container >
               <div className="App">
                <SearchBar />
                <br />
                 <h1>Tienda Online ReactJS</h1>
      
                <br/>
                <span>
                  Aquí abajo se mostrarán los productos:
                </span>



                <Productos />

                <br></br>
                <footer>Regístrese para recibir las últimas novedades</footer>

                </div>
      </Container>

    )
    

        }
    }

export default Home