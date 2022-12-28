import React from 'react';
import Input from '../views/Input';
import Textarea from '../views/Textarea';
import Checkbox from '../views/Checkbox';

const BookServiceForm = () => {
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
        <form className={'formContainer bookServiceForm'}>
          <Input
            type={'text'}
            placeholder={'First Name'}
            id={'firstName'}
            inputName={'firstName'}
            required={true}
          />
          <Input
            type={'text'}
            placeholder={'Last Name'}
            id={'lastName'}
            inputName={'lastName'}
            required={false}
          />
          <Input
            type={'email'}
            placeholder={'E-mail'}
            id={'email'}
            inputName={'email'}
            required={true}
          />
          <Input
            type={'phone'}
            placeholder={'Phone'}
            id={'phone'}
            inputName={'phone'}
            required={false}
          />
          <Input
            type={'text'}
            placeholder={'Position'}
            id={'position'}
            inputName={'position'}
            required={false}
          />
          <Input
            type={'text'}
            placeholder={'Company'}
            id={'company'}
            inputName={'company'}
            required={true}
          />
          <Input
            type={'text'}
            placeholder={'Industry'}
            id={'industry'}
            inputName={'industry'}
            required={false}
          />
          <Textarea
            placeholder={
              'How many people will use Dynamics 365? ' +
              'What other Dynamics products do you use?'
            }
            id={'message'}
            inputName={'message'}
            required={false}
          />
          <Checkbox
            id={'agreements'}
            inputName={'acceptPrivacy'}
            label={'Accept Privacy Policy'}
            required={true}
          />
        </form>
        <button className={'button orangeButton bigButton'}>Apply</button>
      </div>
    </div>
  );
};

export default BookServiceForm;
