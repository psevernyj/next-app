import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import PopularAuthors from '../../components/sharedComponents/PopularAuthors';
import { authorsCards } from '../../utils/authorsCardData';
import SubscribeToNewsForm from "../../components/forms/SubscribeToNewsForm";
import Contacts from "../../components/sharedComponents/Contacts";

const BlogComponent: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | UDS Systems</title>
        <meta
          property="title"
          key="title"
          content="Blog about Microsoft Dynamics 365 | UDS Systems"
        />
        <meta
          name="description"
          key="description"
          content="UDS Systems Blog about Microsoft Dynamics 365. D365 development tips and tricks when working with Microsoft Dynamics 365."
        />
      </Head>
      <main className={'main blogPage'}>
        <div className={'firstScreen'}>
          <div className={'content container'}>
            <h1 className={'title'}>UDS talks! Check on the news</h1>
            <p className={'subtitle'}>
              Here, the leaders of the UDS project teams are sharing their
              experiences in solving crucial tasks resonating with anyone
              interested in business automation.
            </p>
          </div>
        </div>
        <div className={'statistic'}>
          <div className={'container'}>
            <div className={'itemList'}>
              <div className={'item'}>
                <p className={'title'}>Articles</p>
                <p className={'description'}>370+</p>
              </div>
              <div className={'item'}>
                <p className={'title'}>Readers</p>
                <p className={'description'}>1200+</p>
              </div>
              <div className={'item'}>
                <p className={'title'}>Lifehacks</p>
                <p className={'description'}>150+</p>
              </div>
              <div className={'item'}>
                <p className={'title'}>Projects behind</p>
                <p className={'description'}>70+</p>
              </div>
            </div>
          </div>
        </div>
        <PopularAuthors cards={authorsCards} />
        <div className={'latestNews section'}>
          <h2 className={'pageTitle'}>Latest news</h2>
          <div className={'slider container'}>slider</div>
        </div>
        <div className={'allArticles section'}>
          <h2 className={'pageTitle'}>All Articles</h2>
          <div className={'container content'}>
          </div>
        </div>
        <div className={"popularArticles section"}>
          <h2 className={"pageTitle"}>Popular Articles</h2>
        </div>
        <SubscribeToNewsForm/>
        <Contacts/>
      </main>
    </>
  );
};

export default BlogComponent;
