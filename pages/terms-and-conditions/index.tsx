import { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { termsItems } from '../../utils/privacyAndTermsData';

const Accordion = dynamic(
  () => import('../../components/sharedComponents/Accordion')
);
const Contacts = dynamic(
  () => import('../../components/sharedComponents/Contacts')
);

const TermsAndConditionsComponent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Terms and Conditions | UDS Systems</title>
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
