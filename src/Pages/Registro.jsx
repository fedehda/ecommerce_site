import React from "react";
import {useForm} from 'react-hook-form';
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/firebase'
import Input from "../Components/Input";
import ReturnHome from "../Components/Buttons";
import '../Styles/Registro.css'
function Registro(){ 

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) =>{
        console.log("data", data)
        try{
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
            console.log("Usuario creado", responseUser.user.uid)
            
        } catch (e){
            console.log(e)
        }
    }




        return(

                <div>
                <Form onSubmit={handleSubmit(onSubmit)} id="form">
                    <Input label="Nombre*: " name="name" type="text" register={{...register("name", {required: true, minLength: 3})}}></Input>


                    <Input label="Apellido*: " name="lastname" type="text" register={{...register("lastname", {required: true, minLength: 1})}}></Input>
                    
                    <Input label="Correo electrónico*: " name="email" placeholder="example@example.com" type="text" register={{...register("email", {required: true, minLength: 4})}}></Input>

                    <Input label="Teléfono: " name="cellphone" type="text"></Input>

                    <Input label="Contraseña*: " name="password" placeholder="Mínimo 6 caracteres" type="password" register={{...register("password", {required: true, minLength: 6})}}></Input>
                    <p id="error">{errors.password?.type==="required" && <span>El campo es obligatorio</span>}
                    {errors.password?.type==="minLength" && <span>Al menos 6 caracteres</span>}
                    </p>
                    <ReturnHome />
                    <Button type="submit">Registrarse</Button>


                    </Form>

                    
                </div>


            )
   
}
export default Registro

/*
                    {errors.name?.type==="required" && <span>El campo es obligatorio</span>}
                    {errors.name?.type==="minLength" && <span>El campo es obligatorio</span>}
                                        {errors.lastname?.type==="required" && <span>El campo es obligatorio</span>}
                                                            {errors.password?.type==="required" && <span>El campo es obligatorio</span>}
                    {errors.password?.type==="minLength" && <span>Al menos 6 caracteres</span>}

                                        <Input label="Repita contraseña*: " type="password"></Input>


*/