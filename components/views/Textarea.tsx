import React from 'react';
import { FieldErrorsImpl, ValidationRule } from 'react-hook-form';

const Textarea = ({
  id,
  name,
  placeholder,
  errors,
  register,
  options,
}: {
  id: string;
  name: string;
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
      <textarea
        {...register(name, options)}
        className={'input textarea'}
        placeholder={placeholder}
        name={name}
        id={id}
      />
      {errors[name]?.type === 'required' && (
        <span className={'fieldError'}>Field is required</span>
      )}
      {/*{errors[name]?.type === 'pattern' && (*/}
      {/*  <span className={'fieldError'}>{errors[name].message}</span>*/}
      {/*)}*/}
    </div>
  );
};

export default Textarea;
