import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import partnership from '../assets/home-page/header_microsoft_partner_logo.webp';
import gearIcon from '../assets/home-page/gear_icon.webp';
import sales from '../assets/implemented-products/sales.webp';
import customerService from '../assets/implemented-products/customer_service.webp';
import fieldService from '../assets/implemented-products/field_service.webp';
import projectSA from '../assets/implemented-products/projectSA.webp';
import talent from '../assets/implemented-products/talent.webp';
import commerce from '../assets/implemented-products/commerce.webp';
import finance from '../assets/implemented-products/finance.webp';
import business from '../assets/implemented-products/business.webp';
import powerBI from '../assets/implemented-products/powerBI.webp';
import powerApps from '../assets/implemented-products/powerApps.webp';
import powerVA from '../assets/implemented-products/powerVA.webp';
import powerAutomate from '../assets/implemented-products/powerAutomate.webp';

import healthcare from '../assets/industries/healthcare.webp';
import realEstate from '../assets/industries/real_estate.webp';
import telecom from '../assets/industries/telecom.webp';
import automotive from '../assets/industries/automotive.webp';
import construction from '../assets/industries/constructions.webp';
import propM from '../assets/industries/prop_managemet.webp';
import energy from '../assets/industries/energy_sector.webp';
import banking from '../assets/industries/banking.webp';
import { openExternalTab } from '../helpers/openLinks';
import { articleCards } from '../utils/articleCardData';

const OurCases = dynamic(
  () => import('../components/sharedComponents/OurCases')
);
const NeedHelpForm = dynamic(() => import('../components/forms/NeedHelpForm'));
const ClientsGeography = dynamic(
  () => import('../components/sharedComponents/ClientsGeography')
);
const PopularAddOns = dynamic(
  () => import('../components/sharedComponents/PopularAddOns')
);
const MostViewedArticles = dynamic(
  () => import('../components/sharedComponents/MostViewedArticles')
);
const SubscribeToNewsForm = dynamic(
  () => import('../components/forms/SubscribeToNewsForm')
);
const Contacts = dynamic(
  () => import('../components/sharedComponents/Contacts')
);

const RootComponent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | UDS Systems</title>
        <meta
          property="title"
          key="title"
          content="UDS Systems - Microsoft Dynamics 365 & Power Apps Development"
        />
        <meta
          name="description"
          key="description"
          content="UDS Systems is a team of skilled professionals who specialized in Microsoft Dynamics 365 ERP/CRM and Power Apps development. Microsoft implementation partner."
        />
      </Head>
      <main className={'main homePage'}>
        <div className={'firstScreen'}>
          <div className={'content container'}>
            <h1 className={'title'}>
              Grow your company`s potential with transparent reporting and
              empowering tools
            </h1>
            <p className={'subtitle'}>
              Explore our products and services built on Microsoft Dynamics 365,
              PowerApps and AzureCloud.
            </p>
            <Image
              className={'partnerLogo'}
              src={partnership}
              alt={'Microsoft partner: Gold Data Analytics'}
            />
          </div>
        </div>
        <div className={'companyInfo'}>
          <ul className="container">
            <li className="item">
              <p className="number">
                <span className="hash"># </span>
                <span className="text">15</span>
              </p>
              <span className="description">Years on the market</span>
            </li>
            <li className="item">
              <p className="number">
                <span className="hash"># </span>
                <span className="text">80+</span>
              </p>
              <span className="description">Professionals onboard</span>
            </li>
            <li className="item">
              <p className="number">
                <span className="hash"># </span>
                <span className="text">70+</span>
              </p>
              <span className="description">Projects in Europe</span>
            </li>
            <li className="item">
              <p className="number">
                <span className="hash"># </span>
                <span className="text">90-100</span>
              </p>
              <span className="description">Features per month</span>
            </li>
          </ul>
        </div>
        <div className={'services container'}>
          <div className={'section'}>
            <h2 className={'pageTitle'}>Our Services</h2>
            <p className={'pageSubtitle'}>
              We provide services directly to end users or collaborate with
              Microsoft partners as subcontractors offering special conditions.
              We use a flexible pay-as-you-go model with clear estimates and
              budget approval.
            </p>
            <div className={'serviceCases'}>
              <div className={'service'}>
                <Image
                  className={'gearIcon'}
                  src={gearIcon}
                  alt={'Icon'}
                  width={44}
                  height={44}
                />
                <p className={'title'}>Consulting</p>
                <p className={'subtitle'}>
                  Want to fully benefit from the Dynamics 365? UDS R&D
                  Departments build the bright strategy for achieving your
                  business goals.
                </p>
              </div>
              <div className={'service'}>
                <Image
                  className={'gearIcon'}
                  src={gearIcon}
                  alt={'Icon'}
                  width={44}
                  height={44}
                />
                <p className={'title'}>Integration & Implementation</p>
                <p className={'subtitle'}>
                  Want to rationally implement Dynamics 365 for business
                  automation? The UDS complex approach relieves you of anxiety
                  about the result.
                </p>
              </div>
              <div className={'service'}>
                <Image
                  className={'gearIcon'}
                  src={gearIcon}
                  alt={'Icon'}
                  width={44}
                  height={44}
                />
                <p className={'title'}>Development & Customization</p>
                <p className={'subtitle'}>
                  Need smart tools for performing highly personalized tasks and
                  improving Dynamics 365 user experience? You are in the right
                  place.
                </p>
              </div>
              <div className={'service'}>
                <Image
                  className={'gearIcon'}
                  src={gearIcon}
                  alt={'Icon'}
                  width={44}
                  height={44}
                />
                <p className={'title'}>Support & Management</p>
                <p className={'subtitle'}>
                  Need a team of professionals to maintain your Dynamics 365? We
                  offer you our best personnel and rich technical background.
                </p>
              </div>
            </div>
            <div className={'serviceAction'}>
              <p className={'subtitle'}>
                Interested? <br />
                Let us know how we can help you.
              </p>
              <button className={'button orangeButton bigButton'}>
                Talk with consultant
                <svg
                  width="17"
                  height="23"
                  viewBox="0 0 17 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5449 1.22317L12.3292 0.842089C10.9516 0.410233 9.47974 1.10815 8.88979 2.47297L7.95055 4.64583C7.4477 5.80915 7.71269 7.17632 8.60963 8.04618L10.1662 9.55576C10.2117 9.59988 10.2405 9.65948 10.2474 9.72377C10.2936 10.154 10.0132 10.9919 9.36705 12.1557C8.8972 13.0021 8.47195 13.5956 8.10997 13.9294C7.85778 14.162 7.71896 14.2123 7.65985 14.194L5.56578 13.5282C4.39328 13.1554 3.12265 13.5999 2.40524 14.634L1.07115 16.5569C0.231447 17.7672 0.38245 19.4369 1.42441 20.4632L2.3477 21.3725C3.34398 22.3538 4.76225 22.7194 6.08388 22.3358C8.95272 21.503 11.5249 18.9852 13.829 14.8348C16.1362 10.6787 16.9458 7.09893 16.1995 4.09616C15.8579 2.72197 14.8515 1.63279 13.5449 1.22317ZM13.0939 2.77902C13.8779 3.0248 14.4818 3.6783 14.6867 4.50282C15.3144 7.02863 14.5969 10.2016 12.4758 14.0223C10.3575 17.838 8.07737 20.07 5.66381 20.7706C4.87083 21.0008 4.01987 20.7814 3.4221 20.1926L2.49882 19.2833C2.0252 18.8168 1.95656 18.0578 2.33824 17.5077L3.67234 15.5848C3.99843 15.1148 4.57599 14.9127 5.10894 15.0822L7.20826 15.7496C8.42671 16.1274 9.53262 15.1075 10.7202 12.9682C11.5205 11.5266 11.8935 10.4122 11.8002 9.5434C11.7519 9.09335 11.5503 8.67615 11.2318 8.36731L9.67525 6.85773C9.26755 6.46234 9.1471 5.8409 9.37567 5.31212L10.3149 3.13925C10.5831 2.51888 11.2521 2.20165 11.8783 2.39794L13.0939 2.77902Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={'implementedProducts'}>
          <div className={'section'}>
            <h2 className={'pageTitle container'}>
              Microsoft Products that we implement
            </h2>
            <div className={'content container'}>
              <div className={'column'}>
                <div className={'product'}>
                  <Image src={sales} alt={'product'} width={44} height={44} />
                  <p className={'title'}>Sales</p>
                </div>
                <div className={'product'}>
                  <Image
                    src={customerService}
                    alt={'product'}
                    width={44}
                    height={44}
                  />
                  <p className={'title'}>Customer Service</p>
                </div>
                <div className={'product'}>
                  <Image
                    src={fieldService}
                    alt={'product'}
                    width={44}
                    height={44}
                  />
                  <p className={'title'}>Field Service</p>
                </div>
                <div className={'product'}>
                  <Image
                    src={projectSA}
                    alt={'product'}
                    width={44}
                    height={44}
                  />
                  <p className={'title'}>Project Service Automation</p>
                </div>
                <div className={'product'}>
                  <Image src={talent} alt={'product'} width={44} height={44} />
                  <p className={'title'}>Talent</p>
                </div>
              </div>
              <div className={'column'}>
                <div className={'product'}>
                  <Image
                    src={commerce}
                    alt={'product'}
                    width={44}
                    height={44}
                  />
                  <p className={'title'}>Commerce</p>
                </div>
                <div className={'product'}>
                  <Image src={finance} alt={'product'} width={44} height={44} />
                  <p className={'title'}>Finance & Operations</p>
                </div>
                <div className={'product'}>
                  <Image
                    src={business}
                    alt={'product'}
                    width={44}
                    height={44}
                  />
                  <p className={'title'}>Business Central</p>
                </div>
              </div>
              <div className={'column'}>
                <div className={'product'}>
                  <Image src={powerBI} alt={'product'} width={44} height={44} />
                  <p className={'title'}>Power BI</p>
                </div>
                <div className={'product'}>
                  <Image
                    src={powerApps}
                    alt={'product'}
                    width={44}
                    height={44}
                  />
                  <p className={'title'}>Power Apps</p>
                </div>
                <div className={'product'}>
                  <Image src={powerVA} alt={'product'} width={44} height={44} />
                  <p className={'title'}>Power Virtual Agents</p>
                </div>
                <div className={'product'}>
                  <Image
                    src={powerAutomate}
                    alt={'product'}
                    width={44}
                    height={44}
                  />
                  <p className={'title'}>Power Automate</p>
                </div>
                <div className={'product'}>
                  <Image
                    src={powerApps}
                    alt={'product'}
                    width={44}
                    height={44}
                  />
                  <p className={'title'}>Power Apps Portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'industrySection section'}>
          <h2 className={'pageTitle container'}>Our Industries</h2>
          <div className={'industries container'}>
            <div className={'industry'}>
              <Image
                src={healthcare}
                alt={'icon'}
                className={'industryIcon'}
                width={103}
                height={103}
              />
              <p className={'title'}>Healthcare</p>
            </div>
            <div className={'industry'}>
              <Image
                src={realEstate}
                alt={'icon'}
                className={'industryIcon'}
                width={103}
                height={103}
              />
              <p className={'title'}>Real estate</p>
            </div>
            <div className={'industry'}>
              <Image
                src={telecom}
                alt={'icon'}
                className={'industryIcon'}
                width={103}
                height={103}
              />
              <p className={'title'}>Telecom</p>
            </div>
            <div className={'industry'}>
              <Image
                src={automotive}
                alt={'icon'}
                className={'industryIcon'}
                width={103}
                height={103}
              />
              <p className={'title'}>Automotive</p>
            </div>
            <div className={'industry'}>
              <Image
                src={construction}
                alt={'icon'}
                className={'industryIcon'}
                width={103}
                height={103}
              />
              <p className={'title'}>Construction</p>
            </div>
            <div className={'industry'}>
              <Image
                src={propM}
                alt={'icon'}
                className={'industryIcon'}
                width={103}
                height={103}
              />
              <p className={'title'}>
                Property <br /> management
              </p>
            </div>
            <div className={'industry'}>
              <Image
                src={energy}
                alt={'icon'}
                className={'industryIcon'}
                width={103}
                height={103}
              />
              <p className={'title'}>energy sector</p>
            </div>
            <div className={'industry'}>
              <Image
                src={banking}
                alt={'icon'}
                className={'industryIcon'}
                width={103}
                height={103}
              />
              <p className={'title'}>Banking</p>
            </div>
          </div>
        </div>
        <OurCases />
        <NeedHelpForm />
        <ClientsGeography />
        <PopularAddOns />
        <div className={'education section'}>
          <h2 className={'pageTitle'}>UDS Education</h2>
          <div className={'content container'}>
            <p className={'paragraph'}>
              Do you want to get a smooth start as Dynamics 365 Consultant or
              Developer? After completing our courses, you will be ready to
              engage in the workflow fully.
            </p>
            <p className={'paragraph'}>
              Are you a Dynamics 365 Developer or Consultant who wants to
              upgrade skills? We’ll boost your professional growth.
            </p>
            <p className={'paragraph'}>
              Catch the opportunity to learn together with UDS top specialists.
            </p>
          </div>
          <button
            className={'button orangeButton bigButton'}
            onClick={openExternalTab('https://my.uds.systems/education')}
          >
            view courses
          </button>
        </div>
        <MostViewedArticles cards={articleCards} />
        <SubscribeToNewsForm />
        <Contacts />
      </main>
    </div>
  );
};

export default RootComponent;
