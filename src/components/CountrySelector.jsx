import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { countries } from "countries-list";

function CountrySelector({ onSelectCountry }) {
  const [selected, setSelected] = useState("");

  const customLabels = Object.keys(countries).reduce((acc, code) => {
    acc[code] = countries[code].name;
    return acc;
  }, {});

  function handleSelect(countryCode) {
    setSelected(countryCode);
    onSelectCountry(countryCode);
  }

  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={handleSelect}
      searchable={true}
      customLabels={customLabels}
    />
  );
}

export default CountrySelector;
