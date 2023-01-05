import React from 'react';
import { useRouter } from 'next/router';
import ArticleCard, { ArticleCardData } from '../views/ArticleCard';

const MostViewedArticles = ({ cards }: { cards: Array<ArticleCardData> }) => {
  const router = useRouter();
  return (
    <div className={'mostViewedArticles section'}>
      <h2 className={'pageTitle'}>Most Viewed Articles</h2>
      <div className={'articleCards container'}>
        {cards.map((item, idx) => (
          <ArticleCard content={item} key={idx} />
        ))}
      </div>
      <button
        className={'button orangeButton bigButton'}
        onClick={() => router.push('/blog')}
      >
        view all Articles
      </button>
    </div>
  );
};

export default MostViewedArticles;
