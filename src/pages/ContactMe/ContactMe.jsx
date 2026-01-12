import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { sendContactInfo } from "../../services/sendEmailForm";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });

  const [sendButton, setSendButton] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    setSendButton(true);
    e.preventDefault();
    sendContactInfo(formData)
      .then(() => {
        setSuccessMessage("Mensaje Enviado!!!");
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage("Error al enviar el mensaje.");
        console.error(error);
      })
      .finally(() => {
        setSendButton(false);
      });
  };

  return (
    <Container className='mt-3'>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label className='text-white'>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formLastname">
          <Form.Label className='text-white'>Lastname</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter your lastname"
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
            placeholder="Enter your email"
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
            placeholder="Enter your phone number"
            required
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formTopic">
          <Form.Label className='text-white'>Topic</Form.Label>
          <Form.Control
            as="select"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="" disabled>--OPTIONS--</option>
            <option value="Pregunta General">General Question</option>
            <option value="Proyecto Nuevo y colaboracion">New Project and Collaboration</option>
            <option value="Asesoria Tecnologica">Tech Consulting</option>
            <option value="Cotizacion de proyecto">My Services</option>
            <option value="Otro">Other</option>
          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group controlId="formMessage">
          <Form.Label className='text-white'>Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" disabled={sendButton}>
          {sendButton ? "Sending..." : "Submit Request"}
        </Button>
      </Form>
    </Container>
  );
}
