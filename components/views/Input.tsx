import React from 'react';

const Input = ({
  type,
  placeholder,
  inputName,
  id,
  required,
}: {
  type: string;
  placeholder: string;
  inputName: string;
  id: string;
  required: boolean;
}) => {
  return (
    <div className={'inputItem'}>
      {required && <span className={'required'}></span>}
      <input
        className={'input'}
        type={type}
        placeholder={placeholder}
        name={inputName}
        id={id}
        required={required}
      />
      {/*{errors.exampleRequired &&  <span className={"fieldError"}>{errorMessage}</span>}*/}
    </div>
  );
};

export default Input;
