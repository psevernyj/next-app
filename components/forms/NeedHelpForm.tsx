import React from 'react';
import Input from '../views/Input';
import Checkbox from '../views/Checkbox';

const NeedHelpForm = () => {
  return (
    <div className={'section'}>
      <h2 className={'pageTitle'}>Need Help?</h2>
      <p className={'pageSubtitle container'}>
        We can easily find a way to upgrade your system and calculate the most
        favorable cost for beneficial changes.
      </p>
      <div className={'container'}>
        <form className={'formContainer needHelpForm'}>
          <Input
            type={'text'}
            placeholder={'Name'}
            id={'name'}
            inputName={'name'}
            required={true}
          />
          <Input
            type={'email'}
            placeholder={'E-mail'}
            id={'email'}
            inputName={'email'}
            required={true}
          />
          <Input
            type={'textarea'}
            placeholder={'Message'}
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
          <button className={'button orangeButton bigButton'}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default NeedHelpForm;
