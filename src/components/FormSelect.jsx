import React from 'react';
import { Form, Col } from 'react-bootstrap';
import Select from 'react-select';

function FormSelect({ label, name, value, options, onChange }) {
  return (
    <Form.Group as={Col} controlId={name} className="mb-3">
      <Form.Label>{label}:</Form.Label>
      <Select options={options} isMulti onChange={onChange} />
    </Form.Group>
  );
}

export default FormSelect;
