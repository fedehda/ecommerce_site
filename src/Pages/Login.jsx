import {useForm} from 'react-hook-form';
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/firebase'
import Input from '../Components/Input';
import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
//import { getAuth, signInWithEmailAndPassword} from "firebase/auth"

function Login(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const [errorLogin, setErrorLogin] = useState('')
        

    const onSubmit = async (data) =>{
        try{    
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            console.log("Usuario logueado",responseUser.user.uid)
            alert('Usuario logueado con éxito')
            navigate('/')

                
        
        }catch (e){
            console.log(e)
            setErrorLogin('La contraseña es inválida o el usuario no existe.')
        }
    }

    return(
        <div className="">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Usuario: " name="email" type="text" register={{...register("email", {required: true, minLength: 3})}}/>     
                <Input  label="Contraseña:" name="password" type="password" register={{...register("password", {required: true, minLength: 6})}}/>
                <Button variant='primary' type='submit'>Iniciar sesión</Button>
            </Form>
            <strong style={{color: 'red'}}>{errorLogin}</strong>

        </div>
    )
}

export default Login