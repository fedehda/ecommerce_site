import {useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default function ReturnHome (){
    const navigate = useNavigate()
    const onSubmit = async (data) =>{
        navigate('/')
    }
return (<Button variant="secondary" onClick={onSubmit}>Volver al inicio</Button>)

}

