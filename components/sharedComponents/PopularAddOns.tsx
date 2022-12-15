import React from 'react';
import Image from 'next/image';

import sa from '../../assets/add-ons/SA.webp';
import mc from '../../assets/add-ons/MC.webp';
import vm from '../../assets/add-ons/VM.webp';

import { router } from 'next/client';
import { useRouter } from 'next/router';

const PopularAddOns = () => {
  const router = useRouter();
  return (
    <div className={'popularAddons section'}>
      <h2 className={'pageTitle container'}>Our Popular Add-ons</h2>
      <div className={'addOns container'}>
        <div className={'addOn'}>
          <p className={'title'}>Storage Analyzer</p>
          <Image src={sa} alt={'Icon'} width={108} height={108} />
          <span className={'downloadsInfo'}>
            3 354 <span className={'inscription'}>downloads</span>
          </span>
        </div>
        <div className={'addOn'}>
          <p className={'title'}>Migration Calculator</p>
          <Image src={mc} alt={'Icon'} width={120} height={96} />
          <span className={'downloadsInfo'}>
            983 <span className={'inscription'}>downloads</span>
          </span>
        </div>
        <div className={'addOn'}>
          <p className={'title'}>Virtual Machine</p>
          <Image src={vm} alt={'Icon'} width={138} height={99} />
          <span className={'downloadsInfo'}>
            368 <span className={'inscription'}>downloads</span>
          </span>
        </div>
      </div>
      <button
        className={'button orangeButton bigButton'}
        onClick={() => router.push('/add-ons')}
      >
        view all add-ons
      </button>
    </div>
  );
};

export default PopularAddOns;
