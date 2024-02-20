// FormCheckbox.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

function FormCheckbox({ label, name, value = [], options = [], onChange }) {
    const handleChange = (optionValue, isChecked) => { // Modified to accept the value and isChecked parameters
      onChange(optionValue, isChecked); // Pass both parameters to the onChange function
    };
  
    return (
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <div className='d-flex' style={{gap:"2rem"}}>
          {options.map(option => (
            <Form.Check
              key={option.value}
              type="checkbox"
              label={option.label}
              checked={value.includes(option.value)}
              onChange={(e) => handleChange(option.value, e.target.checked)} // Pass the value and checked status
            />
          ))}
        </div>
      </Form.Group>
    );
  }
  
export default FormCheckbox;
