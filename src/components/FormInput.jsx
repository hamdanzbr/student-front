import React from 'react';
import { Form, Col } from 'react-bootstrap';

function FormInput({ label, name, value, onChange }) {
  return (
    <Form.Group as={Col} controlId={name} className="mb-3">
      <Form.Label>{label}:</Form.Label>
      <Form.Control type="text" name={name} value={value} onChange={onChange} />
    </Form.Group>
  );
}

export default FormInput;
