import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';

const CaseCard = dynamic(() => import('../../components/views/CaseCard'));
const NeedHelpForm = dynamic(
  () => import('../../components/forms/NeedHelpForm')
);
const Contacts = dynamic(
  () => import('../../components/sharedComponents/Contacts')
);

const CasesComponent: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Cases | UDS Systems</title>
        <meta property="title" key="title" content="Our Cases | UDS Systems" />
        <meta property="title" key="title" content="Our Cases | UDS Systems" />
        <meta
          name="description"
          key="description"
          content="UDS Systems Cases. UDS mission is to free our clients from cliches and routines. Take a look at some happy episodes of business flows transformation."
        />
      </Head>
      <main className={'main casesPage'}>
        <div className={'firstScreen'}>
          <div className={'content container'}>
            <h1 className={'title'}>
              UDS mission is to free our clients from cliches and routines
            </h1>
            <p className={'subtitle'}>
              Since 2007, we have been implementing boosting and supporting
              projects for companies worldwide. Take a look at some happy
              episodes of business flows transformation.
            </p>
          </div>
        </div>
        <div className={'casesCatalog container'}>
          <input className={'input'} placeholder={'Filters'} />
          <div className={'casesCards'}>
            <CaseCard />
            <CaseCard />
            <CaseCard />
            <CaseCard />
          </div>
        </div>
        <NeedHelpForm />
        <Contacts />
      </main>
    </>
  );
};

export default CasesComponent;
