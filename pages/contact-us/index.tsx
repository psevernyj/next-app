import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const ContactUsComponent: NextPage = () => {
  return (
    <div className={'container'}>
      <Head>
        <title>Contact Us | UDS Systems</title>
        <meta property="title" key="title" content="Contact Us | UDS Systems" />
        <meta
          name="description"
          key="description"
          content="If you have any questions or difficulties we will always be happy to help. Feel free to contact us by phone, skype or email."
        />
      </Head>
      <main className={'main'}>
        <h1 className={'title'}>NEED HELP?</h1>
      </main>
    </div>
  );
};

export default ContactUsComponent;
