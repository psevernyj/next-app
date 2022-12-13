import React from 'react';
import Image from 'next/image';

import Tag from '../views/Tag';

import icon from '../../assets/articles/article_icon.webp';
import logo1 from '../../assets/articles/logo_1.webp';
import logo2 from '../../assets/articles/logo_2.webp';
import logo3 from '../../assets/articles/logo_3.webp';
import logo4 from '../../assets/articles/logo_4.webp';
import arrow from '../../assets/cases/orange_arrow.webp';
import { useRouter } from "next/router";


const MostViewedArticles = () => {
  const router = useRouter();
  return (
    <div className={'mostViewedArticles section'}>
      <h2 className={'pageTitle'}>Most Viewed Articles</h2>
      <div className={'articleCards container'}>
        <div className={'card'}>
          <div className={'imageContent'}>
            <Image
              className={'thumbnail'}
              src={logo1}
              alt={'Article thumbnail'}
            />
            <Image
              className={'icon'}
              src={icon}
              alt={'Article icon'}
              width={20}
              height={20}
            />
          </div>
          <div className={'content'}>
            <p className={'publicDate'}>June 26, 2022</p>
            <p className={'title'}>
              MS Dynamics 365 Grants Management Capabilities
            </p>
            <div className={'actions'}>
              <Tag text={'Grants management'} />
              <button className={'arrowButton'}>
                <Image
                  src={arrow}
                  alt={'Go to case page'}
                  width={44}
                  height={44}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={'card'}>
          <div className={'imageContent'}>
            <Image
              className={'thumbnail'}
              src={logo2}
              alt={'Article thumbnail'}
            />
            <Image
              className={'icon'}
              src={icon}
              alt={'Article icon'}
              width={20}
              height={20}
            />
          </div>
          <div className={'content'}>
            <p className={'publicDate'}>January 20, 2022</p>
            <p className={'title'}>
              Top 5 Bugs on The MS Dynamics Portal and how to fix them
            </p>
            <div className={'actions'}>
              <Tag text={'Bug fixing'} />
              <button className={'arrowButton'}>
                <Image
                  src={arrow}
                  alt={'Go to case page'}
                  width={44}
                  height={44}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={'card'}>
          <div className={'imageContent'}>
            <Image
              className={'thumbnail'}
              src={logo3}
              alt={'Article thumbnail'}
            />
            <Image
              className={'icon'}
              src={icon}
              alt={'Article icon'}
              width={20}
              height={20}
            />
          </div>
          <div className={'content'}>
            <p className={'publicDate'}>November 18, 2021</p>
            <p className={'title'}>How To Become MS Dynamics 365 Consultant</p>
            <div className={'actions'}>
              <Tag text={'Education'} />
              <button className={'arrowButton'}>
                <Image
                  src={arrow}
                  alt={'Go to case page'}
                  width={44}
                  height={44}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={'card'}>
          <div className={'imageContent'}>
            <Image
              className={'thumbnail'}
              src={logo4}
              alt={'Article thumbnail'}
            />
            <Image
              className={'icon'}
              src={icon}
              alt={'Article icon'}
              width={20}
              height={20}
            />
          </div>
          <div className={'content'}>
            <p className={'publicDate'}>August 04, 2021</p>
            <p className={'title'}>
              Marketo And Dynamics 365 CRM Integration Highlights
            </p>
            <div className={'actions'}>
              <Tag text={'Marketo integration'} />
              <button className={'arrowButton'}>
                <Image
                  src={arrow}
                  alt={'Go to case page'}
                  width={44}
                  height={44}
                />
              </button>
            </div>
          </div>
        </div>
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
