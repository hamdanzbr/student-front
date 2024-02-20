// DateInput.jsx
import React from 'react';
import { Form, Col } from 'react-bootstrap';

function DateInput({ label, name, value, onChange }) {
  return (
    <Form.Group as={Col} controlId={name} className="mb-3">
      <Form.Label>{label}:</Form.Label>
      <Form.Control type="date" name={name} value={value} onChange={onChange} />
    </Form.Group>
  );
}

export default DateInput;
