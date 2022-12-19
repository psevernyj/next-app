import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import benefitItem from '../../assets/services/microsoft_365_sales/compromise.svg';
import quickStartDesktop from '../../assets/services/microsoft_365_sales/sales_map.svg';
import quickStartMobile from '../../assets/services/microsoft_365_sales/sales_map_mobile.svg';
import objectionPic from '../../assets/services/microsoft_365_sales/man_icon.svg';
import roadmap from '../../assets/services/microsoft_365_sales/roadmap.webp';
import roadmapMobile from '../../assets/services/microsoft_365_sales/roadmap_mobile.webp';
import partnerLogo from '../../assets/services/microsoft_365_sales/partner_logo.svg';

const BookServiceForm = dynamic(
  () => import('../../components/forms/BookServiceForm')
);
const OurCases = dynamic(
  () => import('../../components/sharedComponents/OurCases')
);
const Contacts = dynamic(
  () => import('../../components/sharedComponents/Contacts')
);

const UdsSalesStart: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Microsoft D365 Sales | UDS Services | UDS Systems</title>
        <meta name="description" content=" UDS Sales Start page" />
      </Head>
      <main className={'main servicePage'}>
        <div className={'firstScreen'}>
          <div className={'container content'}>
            <h1 className={'title'}>
              Microsoft Dynamics 365 Sales. Quick Start
            </h1>
            <p className={'subtitle'}>
              Are you looking for some advanced software to standardize your
              sales and bring your company to the next level? Then Microsoft
              Dynamics 365 Sales is a perfect match!
            </p>
            <p className={'subtitle'}>
              Want to know for sure what to prepare, where to start, and how
              much time and resources to allocate? Then you will like our easy,
              well-thought-out and risk-free approach.
            </p>
            <button className={'button orangeButton bigButton'}>
              1, 2, 3… GO!
            </button>
          </div>
        </div>
        <div className={'turnkeySettings section'}>
          <h2 className={'pageTitle container'}>
            Get Turnkey Settings In 3-5 Weeks
          </h2>
          <div className={'content container'}>
            <p className={'paragraph turnkeyParagraph'}>
              Push up your sales with Microsoft Dynamics 365 Sales and UDS
              Systems. Such a mix will let you feel confident that your CRM
              works for you not you are working for your CRM. Here you will find
              a service package including everything you need for a successful
              start. Keep in mind that an experienced and attentive team will
              lead this project.
            </p>
          </div>
        </div>
        <div className={'benefits section'}>
          <h2 className={'pageTitle'}>Benefits</h2>
          <div className={'benefitsList container'}>
            <div className={'benefit'}>
              <Image src={benefitItem} alt={'Icon'} className={'benefitIcon'} />
              <p className={'title'}>Focus on profit</p>
              <p className={'paragraph'}>
                You will get a clear implementation plan and plan performers to
                skip all that settings stress and get CRM ready to make a
                significant profit.
              </p>
            </div>
            <div className={'benefit'}>
              <Image src={benefitItem} alt={'Icon'} className={'benefitIcon'} />
              <p className={'title'}>No compromise</p>
              <p className={'paragraph'}>
                We will adapt your CRM to your needs from the very beginning so
                you can stop worrying about what system is the best choice.
              </p>
            </div>
            <div className={'benefit'}>
              <Image src={benefitItem} alt={'Icon'} className={'benefitIcon'} />
              <p className={'title'}>Wise prices</p>
              <p className={'paragraph'}>
                The secret of a rational budget we provide to you is the same
                time-tested implementation plan without redundant steps and
                questionable features.
              </p>
            </div>
            <div className={'benefit'}>
              <Image src={benefitItem} alt={'Icon'} className={'benefitIcon'} />
              <p className={'title'}>Support team</p>
              <p className={'paragraph'}>
                Providing a service, we are interested in your smooth user
                experience. Let’s be honest, so you will more likely choose us
                for the long-term partnership.
              </p>
            </div>
          </div>
        </div>
        <div className={'quickStart section'}>
          <h2 className={'pageTitle'}>UDS Quick start sales</h2>
          <div className={'container content'}>
            <Image className={"quickStartMapDesktop"} src={quickStartDesktop} alt={'Quick Start Map'} />
            <Image className={"quickStartMapMobile"} src={quickStartMobile} alt={'Quick Start Map'} />
          </div>
        </div>
        <div className={'objections section'}>
          <h2 className={'pageTitle'}>What if</h2>
          <Image
            className={'objectionThumbnail container'}
            src={objectionPic}
            alt={'Logo'}
          />
          <div className={'objectionList container'}>
            <div className={'objection'}>
              <p className={'title'}>
                … the result does not match my expectations?
              </p>
              <p className={'paragraph'}>
                We start working on the project only after gathering all the
                requirements and goal approval. You will be informed about
                project progress and can always make sure everything goes
                according to plan.
              </p>
            </div>
            <div className={'objection'}>
              <p className={'title'}>… the budget increases suddenly?</p>
              <p className={'paragraph'}>
                The service is delivered at a fixed price as it has a fixed
                scope of tasks. It means the price for this scope will not
                change once approved by you.
              </p>
            </div>
            <div className={'objection'}>
              <p className={'title'}>
                … my team faces difficulties working with CRM?
              </p>
              <p className={'paragraph'}>
                Quick Start Sales by UDS Systems includes a training programme
                for employees. We will arrange a comprehensive overview of your
                Dynamics 365 Sales for your team and answer any questions you
                might face.
              </p>
            </div>
            <div className={'objection'}>
              <p className={'title'}>… the product doesn’t fit my industry?</p>
              <p className={'paragraph'}>
                Dynamics 365 was designed to fit any industry because of the
                large range of customizations available. This solution has been
                field tested by UDS Systems for 15 years and confirmed to be
                effective in various scenarios.
              </p>
            </div>
          </div>
        </div>
        <div className={'serviceRoadmap section'}>
          <h2 className={'pageTitle'}>Service Roadmap</h2>
          <div className={'container content'}>
            <Image src={roadmap} alt={'Map'} className={'serviceMapDesktop'} />
            <Image src={roadmapMobile} alt={'Map'} className={'serviceMapMobile'} />
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

export default UdsSalesStart;
