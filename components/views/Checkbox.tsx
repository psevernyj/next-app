import React from 'react';
import { ValidationRule } from 'react-hook-form';

const Checkbox = ({
  label,
  name,
  id,
  register,
  options,
}: {
  label: string;
  name: string;
  id: string;
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
      <label htmlFor={id} className={'customCheckbox'}>
        {label}
        <input
          type={'checkbox'}
          name={name}
          id={id}
          {...register(name, options)}
        />
        <span className={'checkmark'}></span>
      </label>
    </div>
  );
};

export default Checkbox;
