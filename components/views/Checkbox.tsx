import React from 'react';

const Checkbox = ({
  label,
  inputName,
  id,
  required,
}: {
  label: string;
  inputName: string;
  id: string;
  required: boolean;
}) => {
  return (
    <div className={'inputItem'}>
      <label htmlFor={id}>{label}</label>
      <input
        className={'customCheckbox'}
        type={'checkbox'}
        name={inputName}
        id={id}
        required={required}
      />
    </div>
  );
};

export default Checkbox;
