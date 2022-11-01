import type { NextPage } from 'next';
import Head from 'next/head';

const CasesComponent: NextPage = () => {
  return (
    <div className={"container"}>
      <Head>
        <title>Our Cases | UDS Systems</title>
        <meta name="description" content="Cases" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"main"}>
        <h1 className={"title"}>
            UDS mission is to free our clients from cliches and routines
        </h1>
      </main>
    </div>
  );
};

export default CasesComponent;
