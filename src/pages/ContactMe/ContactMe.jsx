import React from 'react'
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import {sendContactInfo} from "../../services/sendEmailForm";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });

  const [sendButton,setSendButton] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    setSendButton(true);
    e.preventDefault();
    // Add your form submission logic here
    sendContactInfo(formData)
    .then((successMessage) => {
     
        alert("Mensaje Enviado!!!")
    })
    .catch((errorMessage) => {
        console.error(errorMessage);
    });

   
    
  };

  return (
    <Container className='mt-3'>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName ">
          <Form.Label className='text-white'>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tu nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formLastname">
          <Form.Label className='text-white'>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tus apellidos"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formEmail">
          <Form.Label className='text-white'>Correo Electronico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Tu Correo Electronico"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formPhone">
          <Form.Label className='text-white'>Telefono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Tu telefono"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formTopic">
          <Form.Label className='text-white'>Tema !</Form.Label>
          <Form.Control
            as="select"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona un tema</option>
            <option value="Pregunta General">Pregunta General</option>
            <option value="Proyecto Nuevo y colaboracion">Proyecto Nuevo y colaboracion</option>
            <option value="Asesoria Tecnologica">Asesoria Tecnologica</option>
            <option value="Cotizacion de proyecto">Cotizacion de proyecto</option>
            <option value="Otro">Otro</option>
          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId="formMessage">
          <Form.Label className='text-white'>Cuentame en que te ayudo {`${":)"}`}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Cuentame como puedo ayudarte"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" disabled={sendButton}>
          Submit
        </Button>
      </Form>
    </Container>

  );
}
