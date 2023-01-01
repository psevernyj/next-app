import React from 'react';
import Input from '../views/Input';
import Textarea from '../views/Textarea';
import Checkbox from '../views/Checkbox';
import { FieldErrors, useForm, UseFormRegisterReturn } from 'react-hook-form';

export type BookServiceFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  company: string;
  industry: string;
  message: string;
  acceptPrivacy: boolean;
  register: Array<UseFormRegisterReturn>;
  errors: FieldErrors;
};

const BookServiceForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<BookServiceFormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data, 'BookServiceForm');
  });

  return (
    <div className={'formContent section'}>
      <h2 className={'pageTitle'}>
        How to get the price and book the service?{' '}
      </h2>
      <p className={'pageSubtitle container'}>
        Please apply, and we will send you the current price and more details
        about UDS Quick Start Sales. Check your mail and consider the offer.
      </p>
      <div className={'container'}>
        <form className={'formContainer bookServiceForm'} onSubmit={onSubmit}>
          <Input
            id={'firstName'}
            name={'firstName'}
            type={'text'}
            placeholder={'First Name'}
            errors={errors}
            register={register}
            options={{
              required: true,
            }}
          />
          <Input
            type={'text'}
            placeholder={'Last Name'}
            id={'lastName'}
            name={'lastName'}
            errors={errors}
            register={register}
            options={{
              required: false,
            }}
          />
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
          <Input
            type={'phone'}
            placeholder={'Phone'}
            id={'phone'}
            name={'phone'}
            errors={errors}
            register={register}
            options={{
              required: false,
            }}
          />
          <Input
            type={'text'}
            placeholder={'Position'}
            id={'position'}
            name={'position'}
            errors={errors}
            register={register}
            options={{
              required: false,
            }}
          />
          <Input
            type={'text'}
            placeholder={'Company'}
            id={'company'}
            name={'company'}
            errors={errors}
            register={register}
            options={{
              required: true,
            }}
          />
          <Input
            type={'text'}
            placeholder={'Industry'}
            id={'industry'}
            name={'industry'}
            errors={errors}
            register={register}
            options={{
              required: false,
            }}
          />
          <Textarea
            errors={errors}
            placeholder={
              'How many people will use Dynamics 365? ' +
              'What other Dynamics products do you use?'
            }
            id={'message'}
            name={'message'}
            register={register}
            options={{
              required: false,
            }}
          />
          <Checkbox
            id={'acceptPrivacy'}
            name={'acceptPrivacy'}
            label={'Accept Privacy Policy'}
            register={register}
            options={{
              required: true,
            }}
          />
          <button className={'button orangeButton bigButton'}>Apply</button>
        </form>
      </div>
    </div>
  );
};

export default BookServiceForm;
