import React from 'react';
import Image from 'next/image';
import Tag from './Tag';
import arrow from '../../assets/cases/orange_arrow.webp';

export type ArticleCardData = {
  typeIcon: string;
  thumbnail: string;
  publicDate: string;
  title: string;
  tagText: string;
};

const ArticleCard = ({
  content: { thumbnail, typeIcon, publicDate, title, tagText },
}: {
  content: ArticleCardData;
}) => {
  return (
    <div className={'articleCard'}>
      <div className={'imageContent'}>
        <Image
          className={'thumbnail'}
          src={thumbnail}
          alt={'Article thumbnail'}
          width={100}
          height={174}
        />
        <Image
          className={'type'}
          src={typeIcon}
          alt={'Article icon'}
          width={20}
          height={20}
        />
      </div>
      <div className={'content'}>
        <p className={'publicDate'}>{publicDate}</p>
        <p className={'title'}>{title}</p>
        <div className={'actions'}>
          <Tag text={tagText} />
          <button className={'arrowButton'}>
            <Image src={arrow} alt={'Read'} width={44} height={44} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
