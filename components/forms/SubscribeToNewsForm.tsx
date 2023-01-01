import React from 'react';
import Input from '../views/Input';
import { FieldErrors, useForm, UseFormRegisterReturn } from 'react-hook-form';

export type SubscribeToNewsFormData = {
  email: string;
  register: Array<UseFormRegisterReturn>;
  errors: FieldErrors;
};

const SubscribeToNewsForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SubscribeToNewsFormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data, 'SubscribeToNewsForm');
  });

  return (
    <div className={'section'}>
      <h2 className={'pageTitle'}>Subscribe to our news</h2>
      <div className={'container'}>
        <form className={'formContainer subscribeForm'} onSubmit={onSubmit}>
          <Input
            errors={errors}
            id={'email'}
            name={'email'}
            type={'text'}
            placeholder={'E-mail'}
            register={register}
            options={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Type valid e-mail',
              },
            }}
          />
          <button className={'button orangeButton bigButton'}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeToNewsForm;
