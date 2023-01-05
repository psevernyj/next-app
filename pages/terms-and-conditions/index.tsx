import { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { termsItems } from '../../utils/privacyAndTermsData';
import React from 'react';

const Accordion = dynamic(() => import('../../components/views/Accordion'));
const Contacts = dynamic(
  () => import('../../components/sharedComponents/Contacts')
);

const TermsAndConditionsComponent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Terms and Conditions | UDS Systems</title>
        <meta
          property="title"
          key="title"
          content="Terms and conditions | UDS Systems"
        />
        <meta
          name="description"
          key="description"
          content="Terms and conditions. UDS Systems. By accessing UDS System’s websites we assume you accept these terms and conditions in full."
        />
      </Head>
      <main className={'main privacyAndTerms'}>
        <div className={'firstScreen terms'}>
          <div className={'content container'}>
            <h1 className={'title mainTitle'}>
              Welcome to our <br />
              Terms and Conditions
            </h1>
          </div>
        </div>
        <div className={'content container'}>
          <Accordion items={termsItems} />
        </div>
        <Contacts />
      </main>
    </div>
  );
};

export default TermsAndConditionsComponent;
