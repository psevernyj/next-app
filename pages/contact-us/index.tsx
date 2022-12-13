import type { NextPage } from 'next';
import Head from 'next/head';

const ContactUsComponent: NextPage = () => {
  return (
    <div className={'container'}>
      <Head>
        <title>Contact Us | UDS Systems</title>
        <meta name="description" content="Cases" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'main'}>
        <h1 className={'title'}>NEED HELP?</h1>
      </main>
    </div>
  );
};

export default ContactUsComponent;
