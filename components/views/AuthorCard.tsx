import React from 'react';
import Image from 'next/image';
import certificationLogo from '../../assets/blog-page/certificate.webp';
import articleIcon from '../../assets/blog-page/article_icon.svg';
import check from '../../assets/blog-page/check_icon.svg';

export type AuthorCardData = {
  authorPhoto: string;
  altText: string;
  firstName: string;
  position: string;
  description: string;
  articlesCount: number;
  experience: string;
  certificationCount: number;
  certificates: Array<CertificatesShortCut>;
};

type CertificatesShortCut = {
  name: string;
  thumbnail: string;
};

const AuthorCard = ({
  content: {
    authorPhoto,
    firstName,
    position,
    description,
    articlesCount,
    experience,
    certificationCount,
    altText,
    certificates,
  },
}: {
  content: AuthorCardData;
}) => {
  return (
    <div className={'authorCard'}>
      <div className={'cardSide front'}>
        <div className={'leftSection'}>
          <Image src={authorPhoto} alt={altText} width={87} height={87} />
          <p className={'name'}>{firstName},</p>
          <p className={'position'}>{position}</p>
        </div>
        <div className={'rightSection'}>
          <div className={'mark articleCount'}>
            <Image src={articleIcon} alt={'Icon'} />
            {articlesCount}
          </div>
          <div className={'content'}>
            <p className={'description'}>{description}</p>
            <div className={'certification'}>
              <Image
                src={certificationLogo}
                alt={'Certificate Logo'}
                width={80}
                height={80}
              />
              <span className={'certificationCount'}>
                (+{certificationCount})
              </span>
            </div>
          </div>
          <div className={'mark experience'}>
            <Image src={check} alt={'Icon'} />
            {experience}
          </div>
        </div>
      </div>
      <div className={'cardSide back'}>
        <div className={'leftSection'}>
          <Image src={authorPhoto} alt={altText} width={87} height={87} />
          <p className={'name'}>{firstName},</p>
          <p className={'position'}>{position}</p>
        </div>
        <div className={'rightSection'}>
          <div className={"certificateContainer"}>
            {certificates.map((item, idx) => (
              <div className={"certificate mark"}>
                <Image
                  src={item.thumbnail}
                  alt={'Certificate'}
                  width={25}
                  height={25}
                />
                <p className={"title"}>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
