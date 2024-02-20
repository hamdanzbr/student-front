import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function CountryPhoneCodeInput({ value, onChange }) {
  return (
    <PhoneInput
      country={'in'} // Set default country to India
      value={value}
      onChange={onChange}
      inputProps={{
        name: 'phone',
        required: true,
      }}
      dropdownClass="custom-dropdown" // Optional custom class for dropdown
    />
  );
}

export default CountryPhoneCodeInput;
