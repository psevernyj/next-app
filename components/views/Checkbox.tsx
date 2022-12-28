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
      <label htmlFor={id} className={'customCheckbox'}>
        {label}
        <input type={'checkbox'} name={inputName} id={id} required={required} />
        <span className={'checkmark'}></span>
      </label>
    </div>
  );
};

export default Checkbox;
