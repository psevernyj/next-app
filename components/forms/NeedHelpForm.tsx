import React from 'react';
import Checkbox from '../views/Checkbox';
import { FieldErrors, useForm, UseFormRegisterReturn } from 'react-hook-form';
import Input from '../views/Input';
import Textarea from '../views/Textarea';

export type NeedHelpFormData = {
  name: string;
  email: string;
  message: string;
  acceptPrivacy: boolean;
  register: Array<UseFormRegisterReturn>;
  errors: FieldErrors;
};

const NeedHelpForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NeedHelpFormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data, 'NeedHelpForm');
  });

  return (
    <div className={'section'}>
      <h2 className={'pageTitle'}>Need Help?</h2>
      <p className={'pageSubtitle container'}>
        We can easily find a way to upgrade your system and calculate the most
        favorable cost for beneficial changes.
      </p>
      <div className={'container'}>
        <form className={'formContainer needHelpForm'} onSubmit={onSubmit}>
          <Input
            errors={errors}
            id={'name'}
            name={'name'}
            type={'text'}
            placeholder={'Name'}
            register={register}
            options={{
              required: true,
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
          <Textarea
            errors={errors}
            id={'message'}
            name={'message'}
            placeholder={'Message'}
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
          <button className={'button orangeButton bigButton'}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default NeedHelpForm;
