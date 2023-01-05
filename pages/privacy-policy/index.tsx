import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { privacyItems } from '../../utils/privacyAndTermsData';
import React from 'react';

const Accordion = dynamic(() => import('../../components/views/Accordion'));
const Contacts = dynamic(
  () => import('../../components/sharedComponents/Contacts')
);

const PrivacyPolicyComponent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy | UDS Systems</title>
        <meta
          property="title"
          key="title"
          content="Privacy Policy | UDS Systems"
        />
        <meta
          name="description"
          key="description"
          content="Privacy Policy. UDS Systems. We respect your privacy and are committed to protecting personal data you may provide us through the Website."
        />
      </Head>
      <main className={'main privacyAndTerms'}>
        <div className={'firstScreen privacy'}>
          <div className={'content container'}>
            <h1 className={'title mainTitle'}>Welcome to our Privacy Policy</h1>
            <p className={'subtitle'}>
              Your privacy is critically important for us
            </p>
          </div>
        </div>
        <div className={'content container'}>
          <Accordion items={privacyItems} />
        </div>
        <Contacts />
      </main>
    </div>
  );
};

export default PrivacyPolicyComponent;
