import React from 'react';

const Textarea = ({
  placeholder,
  inputName,
  id,
  required,
}: {
  placeholder: string;
  inputName: string;
  id: string;
  required: boolean;
}) => {
  return (
    <div className={'inputItem'}>
      {required && <span className={'required'}></span>}
      <textarea
        className={'input textarea'}
        placeholder={placeholder}
        name={inputName}
        id={id}
        required={required}
      />
    </div>
  );
};

export default Textarea;
