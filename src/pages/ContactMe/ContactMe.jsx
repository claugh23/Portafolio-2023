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
          <Form.Label className='text-white'>Name</Form.Label>
          <Form.Control
            type="text"
            
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formLastname">
          <Form.Label className='text-white'>Lastname </Form.Label>
          <Form.Control
            type="text"
            
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formEmail">
          <Form.Label className='text-white'>Email Address</Form.Label>
          <Form.Control
            type="email"
            
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formPhone">
          <Form.Label className='text-white'>Phone</Form.Label>
          <Form.Control
            type="tel"
            
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formTopic">
          <Form.Label className='text-white'>Topic !</Form.Label>
          <Form.Control
            as="select"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="" disabled>--OPTIONS--</option>
            <option value="Pregunta General">General Question</option>
            <option value="Proyecto Nuevo y colaboracion">New Proyect and Collaboration</option>
            <option value="Asesoria Tecnologica">Tech Consulting</option>
            <option value="Cotizacion de proyecto">My Services</option>
            <option value="Otro">Other</option>
          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId="formMessage">
          <Form.Label className='text-white'>Details {`${":)"}`}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" disabled={sendButton}>
          Submit Request
        </Button>
      </Form>
    </Container>

  );
}
