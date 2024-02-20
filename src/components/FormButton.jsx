import React from 'react';
import { Button } from 'react-bootstrap';

function FormButton({ type, onClick }) {
  return (
    <div className=" p-3">
      <Button className='btn btn-primary' type={type} onClick={onClick}>Submit</Button>
    </div>
  );
}

export default FormButton;
