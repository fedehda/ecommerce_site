import './App.css'
import Home from './Pages/Home'
import Menu from './Components/Menu'
import Registro from './Pages/Registro'
import Productos from './Pages/Productos'
import NewProduct from './Pages/NewProduct'
import Details from './Pages/Details'
import NotFound from './Pages/NotFound'
import Login from './Pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'

function App() {

    return (
      <div className="App" >

      <Router>

        <Menu />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/Pages/Productos" element={<Productos />}></Route>
          <Route path="/Pages/Productos/:query" element={<Productos />}></Route>
          <Route path="/Pages/NewProduct" element={<NewProduct />}></Route>
          <Route path='/Pages/Login' element={<Login />}></Route>
          <Route path="/Pages/Registro" element={<Registro />}></Route>
          <Route path="/Pages/Details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
          
       
        </Routes>

      </Router>

      


       </div>
    )
  
}
export default App;
