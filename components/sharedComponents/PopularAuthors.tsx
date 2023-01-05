import React from 'react';
import AuthorCard, { AuthorCardData } from '../views/AuthorCard';

const PopularAuthors = ({ cards }: { cards: Array<AuthorCardData> }) => {
  return (
    <div className={'popularAuthors section'}>
      <h2 className={'pageTitle'}>Popular authors</h2>
      <div className={'authorsCards container'}>
        {cards.map((item, idx) => (
          <AuthorCard content={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default PopularAuthors;
