import type { NextPage } from 'next';
import Head from 'next/head';

const BlogComponent: NextPage = () => {
  return (
    <div className={'container'}>
      <Head>
        <title>Blog | UDS Systems</title>
        <meta name="description" content="UDS talks! Check on the news" />
      </Head>
      <main className={'main'}>
        <h1 className={'title'}>UDS talks! Check on the news</h1>
      </main>
    </div>
  );
};

export default BlogComponent;
