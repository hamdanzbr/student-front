import React from 'react';
import { Form, Col } from 'react-bootstrap';

function FormFileInput({ label, name, onChange, multiple }) {
  return (
    <Form.Group as={Col} controlId={name} className="mb-3">
      <Form.Label>{label}:</Form.Label>
      <Form.Control type="file" name={name} onChange={onChange} multiple={multiple} />
    </Form.Group>
  );
}

export default FormFileInput;
