import React from 'react';
import {
  FieldErrorsImpl,
  ValidationRule,
} from 'react-hook-form';

const InputTest = ({
  id,
  name,
  type,
  placeholder,
  errors,
  register,
  options,
}: {
  id: string;
  name: string;
  type: string;
  placeholder: string;

  errors: Partial<FieldErrorsImpl>;
  register: any;
  options?: Partial<{
    required: string | ValidationRule<boolean>;
    min: ValidationRule<string | number>;
    max: ValidationRule<string | number>;
    pattern: { value: RegExp; message: string };
  }>;
}) => {
  return (
    <div className={'inputItem'}>
      {options?.required && <span className={'required'}></span>}
      <input
        {...register(name, options)}
        className={'input'}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
      />
      {errors[name]?.type === 'required' && (
        <span className={'fieldError'}>Field is required</span>
      )}
      {errors[name]?.type === 'pattern' && (
        <span className={'fieldError'}>{errors[name].message}</span>
      )}
    </div>
  );
};

export default InputTest;
