import React from 'react';
import { Form, Col } from 'react-bootstrap';

function FormRadio({ label, name, value, checked, onChange }) {
  return (
    <Form.Group as={Col} controlId={name} className="mb-3">
      <Form.Label>{label}:</Form.Label>
      <div>
        <Form.Check inline type="radio" label="Male" name={name} value="male" checked={value === "male"} onChange={onChange} />
        <Form.Check inline type="radio" label="Female" name={name} value="female" checked={value === "female"} onChange={onChange} />
      </div>
    </Form.Group>
  );
}

export default FormRadio;
