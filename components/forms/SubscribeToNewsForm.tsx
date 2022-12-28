import React from 'react';
import Input from '../views/Input';

const SubscribeToNewsForm = () => {
  return (
    <div className={'section'}>
      <h2 className={'pageTitle'}>Subscribe to our news</h2>
      <div className={'container'}>
        <form className={'formContainer subscribeForm'}>
          <Input
            type={'email'}
            placeholder={'E-mail'}
            id={'email'}
            inputName={'email'}
            required={true}
          />
        </form>
      </div>
      <button className={'button orangeButton bigButton'}>Subscribe</button>
    </div>
  );
};

export default SubscribeToNewsForm;
