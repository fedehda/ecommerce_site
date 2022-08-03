import React from "react";
import Form from "react-bootstrap/Form";


function Input(props){

    const { name, label, placeholder, type, register} = props
    return(
            <Form.Group className="mb-3" controlId={name} >
                <Form.Label>{label}</Form.Label>
                <Form.Control type={ type || "text"} name={name} placeholder={placeholder || " "} {...register} />
            </Form.Group>
    )
}

export default Input