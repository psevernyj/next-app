import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import benefitItem from '../../assets/services/microsoft_365_sales/compromise.svg';
import lightningIcon from '../../assets/services/customer-services/lightning_icon.svg';
import lampIcon from '../../assets/services/customer-services/lamp_icon.svg';
import roadmap from '../../assets/services/customer-services/cs_roadmap.webp';
import partnerLogo from '../../assets/services/microsoft_365_sales/partner_logo.svg';
import roadmapMobile from '../../assets/services/microsoft_365_sales/roadmap_mobile.webp';
import quickStartDesktop from '../../assets/services/customer-services/cs_sales_map.svg';
import quickStartMobile from '../../assets/services/customer-services/cs-sales-map-mobile.svg';

const BookServiceForm = dynamic(
  () => import('../../components/forms/BookServiceForm')
);
const OurCases = dynamic(
  () => import('../../components/sharedComponents/OurCases')
);
const Contacts = dynamic(
  () => import('../../components/sharedComponents/Contacts')
);

const UdsCustomerService: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Customer Service | UDS Services | UDS Systems</title>
        <meta name="description" content=" UDS Sales Start page" />
      </Head>
      <main className={'main servicePage'}>
        <div className={'firstScreen'}>
          <div className={'container content'}>
            <h1 className={'title'}>
              Microsoft Dynamics 365 Customer Service. Quick Start
            </h1>
            <p className={'subtitle'}>
              Want to optimise and scale your customer service management with
              minimal resources? Quick Start with Microsoft Dynamics 365
              Customer Service includes everything to minimum resources, reach
              this aim and more!
            </p>
            <p className={'subtitle'}>
              Need reliable contractors to help you with this? Our sacred task
              is to deliver quality service on the agreed time.
            </p>
            <button className={'button orangeButton bigButton'}>
              See a service roadmap
            </button>
          </div>
        </div>
        <div className={'turnkeySettings section'}>
          <h2 className={'pageTitle container'}>
            Get Turnkey Settings In 3-5 Weeks
          </h2>
          <div className={'content container'}>
            <p className={'paragraph turnkeyParagraph'}>
              Microsoft Dynamics 365 Customer Service was designed to unite and
              level up all the steps of your Customer Service chain and, as a
              result, rock customer loyalty and boost sales.
            </p>
            <p className={'paragraph turnkeyParagraph'}>
              To fasten the return on investments, we offer you a service
              package containing everything needed for the correct start.
            </p>
          </div>
        </div>
        <div className={'benefits section'}>
          <h2 className={'pageTitle'}>Benefits</h2>
          <div className={'benefitsList container'}>
            <div className={'benefit'}>
              <Image src={benefitItem} alt={'Icon'} className={'benefitIcon'} />
              <p className={'title'}>Focus on client</p>
              <p className={'paragraph'}>
                By configuring the Customer Service Module, we think about
                effective ways to organize flows and data. You devote all your
                attention to advanced client care.
              </p>
            </div>
            <div className={'benefit'}>
              <Image src={benefitItem} alt={'Icon'} className={'benefitIcon'} />
              <p className={'title'}>Software adopting</p>
              <p className={'paragraph'}>
                We launch the system carefully taking into account all the
                aspects of customer management that are specific to your
                company.
              </p>
            </div>
            <div className={'benefit'}>
              <Image src={benefitItem} alt={'Icon'} className={'benefitIcon'} />
              <p className={'title'}>Resources saving</p>
              <p className={'paragraph'}>
                The solid experience behind UDS Systems allows us to rationally
                distribute the project time and significantly reduce the cost of
                our services.
              </p>
            </div>
            <div className={'benefit'}>
              <Image src={benefitItem} alt={'Icon'} className={'benefitIcon'} />
              <p className={'title'}>Fast troubleshooting</p>
              <p className={'paragraph'}>
                We promptly inform you about the project`s progress and are
                generous with clarifications and assistance when necessary.
              </p>
            </div>
          </div>
        </div>
        <div className={'aboutCase section'}>
          <h2 className={'pageTitle container'}>
            About Dynamics 365 Customer Service superpower
          </h2>
          <div className={'container'}>
            <div className={'content'}>
              <div className={'paragraph left'}>
                <p>Automation of all service processes</p>
                <p>Visualization of key customer service statistics</p>
                <p>Сustomized reporting for the client care department</p>
                <p>Easy management of tasks and notifications</p>
              </div>
              <Image
                className={'lightningIcon'}
                src={lightningIcon}
                alt={'icon'}
              />
              <div className={'paragraph right'}>
                <p>Fast customer identification</p>
                <p>Convenient storage of client profiles</p>
                <p>Increasing customer loyalty</p>
                <p>Ensuring a responsive support</p>
              </div>
            </div>
          </div>
        </div>
        <div className={'quickStart section'}>
          <h2 className={'pageTitle'}>UDS Quick start sales</h2>
          <div className={'container content'}>
            <Image
              className={'quickStartMapDesktop'}
              src={quickStartDesktop}
              alt={'Quick Start Map'}
            />
            <Image
              className={'quickStartMapMobile'}
              src={quickStartMobile}
              alt={'Quick Start Map'}
            />
          </div>
        </div>
        <div className={'resultBenefits section'}>
          <h2 className={'pageTitle'}>You will be pleased to know</h2>
          <div className={'resultIconMobile container'}>
            <Image className={'lampIcon'} src={lampIcon} alt={'Lamp Icon'} />
          </div>
          <div className="content container">
            <div className="left">
              <div className="block">
                <p className="title">
                  The results will match your expectations.
                </p>
                <p className={'paragraph'}>
                  We start working on the project only after gathering all the
                  requirements and goal approval. You will be informed about
                  project progress and can always make sure everything goes
                  according to plan.
                </p>
              </div>
              <div className="block">
                <p className="title">The budget is fixed and transparent.</p>
                <p className={'paragraph'}>
                  The service provides a full and clear scope of settings
                  necessary to launch the system for your company.
                </p>
              </div>
            </div>
            <div className={'resultIconDesktop'}>
              <Image className={'lampIcon'} src={lampIcon} alt={'Lamp Icon'} />
            </div>
            <div className="right">
              <div className="block">
                <p className="title">
                  We will help your team to master the new CRM.
                </p>
                <p className={'paragraph'}>
                  Quick Start Customer Service by UDS Systems includes a
                  training programme for employees. We will arrange a
                  comprehensive overview of your Dynamics 365 Customer Service
                  for your team and answer any questions you might face.
                </p>
              </div>
              <div className="block">
                <p className="title">The product will fit your industry.</p>
                <p className={'paragraph'}>
                  Dynamics 365 is highly-customizable. UDS Systems has
                  field-tested it for 15 years in various scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={'serviceRoadmap section'}>
          <h2 className={'pageTitle'}>Service Roadmap</h2>
          <div className={'container content'}>
            <Image src={roadmap} alt={'Map'} className={'serviceMapDesktop'} />
            <Image
              src={roadmapMobile}
              alt={'Map'}
              className={'serviceMapMobile'}
            />
          </div>
        </div>
        <div className={'about section'}>
          <h2 className={'pageTitle'}>About us</h2>
          <div className={'container'}>
            <div className={'content'}>
              <div className={'paragraphSection'}>
                <p className={'paragraph'}>
                  Since 2007, we provide Dynamics 365 R&D services, migrations,
                  projects, and support services worldwide. We have earned
                  Microsoft Gold Application Development competency. We love our
                  job and aim to keep leadership in the chosen business area.
                  Therefore, we value our reputation as well as long-term
                  relationships and are responsible for the results.
                </p>
                <p className={'paragraph'}>
                  By the way, we at UDS Systems also use plenty of Microsoft
                  products built on Dynamics 365 in our inner workings and find
                  these solutions powerful.{' '}
                </p>
              </div>
              <Image
                className={'partnerLogo'}
                src={partnerLogo}
                alt={'Partner Logo'}
              />
            </div>
          </div>
        </div>
        <BookServiceForm />
        <OurCases />
        <Contacts />
      </main>
    </div>
  );
};

export default UdsCustomerService;
