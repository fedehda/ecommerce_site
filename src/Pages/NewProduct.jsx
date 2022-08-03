import React from 'react'
import {Form, Container, Button} from 'react-bootstrap'
import firebase from '../Config/firebase';
import {useForm} from 'react-hook-form';
import Input from '../Components/Input';

function NewProduct(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) =>{
        console.log("data", data)
        try{
            const document = await firebase.db.collection("products")
            .add({
                title: data.title,
                description: data.description,
                price: data.price
                
            })
            console.log(document)
        } catch (e){
            console.log(e)
        }
    }
    return(
        <div>
            <h3>Alta de producto nuevo</h3>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Título" type="text" name="title" register={{...register("title")}}></Input>
                    <Input label="Descripción" type="text" name="description" register={{...register("description")}}></Input>
                    <Input label="Precio" type="text" name="price" register={{...register("price")}}></Input>
                    <Button type="submit">Subir</Button>

                </Form>
            </Container>
                
        </div>
    )

}
export default NewProduct