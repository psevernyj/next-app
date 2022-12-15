import React from 'react';
import Image from 'next/image';

import caseManagement from '../../assets/cases/case_logo/case_management.webp';
import carRepair from '../../assets/cases/case_logo/solution_for_a_car.webp';
import customizedSolution from '../../assets/cases/case_logo/customized_solution.webp';
import arrow from '../../assets/cases/orange_arrow.webp';

import powerBI from '../../assets/implemented-products/powerBI.webp';
import powerApps from '../../assets/implemented-products/powerApps.webp';
import powerVA from '../../assets/implemented-products/powerVA.webp';
import powerAutomate from '../../assets/implemented-products/powerAutomate.webp';

import Tag from '../views/Tag';
import { useRouter } from 'next/router';

const OurCases = () => {
  const router = useRouter();
  return (
    <div className={'ourCases section'}>
      <h2 className={'pageTitle'}>Our Cases</h2>
      <p className={'pageSubtitle container'}>
        UDS team delivers highly tailored solutions to companies with staff{' '}
        <br />
        from 50 to 200,000 employees.
      </p>
      <div className={'casesCards container'}>
        <div className={'caseCard'}>
          <Image
            className={'thumbnail'}
            src={caseManagement}
            alt={'Case Logo'}
          />
          <div className={'content'}>
            <div className={'products'}>
              <div className={'product'}>
                <Image src={powerBI} alt={'logo'} width={18} height={18} />
                <span className={'title'}>Power BI</span>
              </div>
              <div className={'product'}>
                <Image
                  src={powerAutomate}
                  alt={'logo'}
                  width={18}
                  height={18}
                />
                <span className={'title'}>Power Automate</span>
              </div>
            </div>
            <p className={'title'}>
              Optimization of Case Management for Medical Insurance Company
            </p>
            <div className={'actions'}>
              <div className={'tags'}>
                <Tag text={'Healthcare'} title={'industry'} />
                <Tag text={'Management'} title={'service'} />
              </div>
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
        <div className={'caseCard'}>
          <Image className={'thumbnail'} src={carRepair} alt={'Case Logo'} />
          <div className={'content'}>
            <div className={'products'}>
              <div className={'product'}>
                <Image src={powerApps} alt={'logo'} width={18} height={18} />
                <span className={'title'}>Power Apps</span>
              </div>
              <div className={'product'}>
                <Image
                  src={powerAutomate}
                  alt={'logo'}
                  width={18}
                  height={18}
                />
                <span className={'title'}>Power Automate</span>
              </div>
            </div>
            <p className={'title'}>
              Microsoft Dynamics solution for a car repair company
            </p>
            <div className={'actions'}>
              <div className={'tags'}>
                <Tag text={'Automotive'} title={'industry'} />
                <Tag text={'Development'} title={'service'} />
              </div>
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
        <div className={'caseCard'}>
          <Image
            className={'thumbnail'}
            src={customizedSolution}
            alt={'Case Logo'}
          />
          <div className={'content'}>
            <div className={'products'}>
              <div className={'product'}>
                <Image src={powerApps} alt={'logo'} width={18} height={18} />
                <span className={'title'}>Power Apps</span>
              </div>
              <div className={'product'}>
                <Image src={powerVA} alt={'logo'} width={18} height={18} />
                <span className={'title'}>Power Virtual Agents</span>
              </div>
            </div>
            <p className={'title'}>
              Customized Solution for Accounting and Advisory company
            </p>
            <div className={'actions'}>
              <div className={'tags'}>
                <Tag text={'Telecom'} title={'industry'} />
                <Tag text={'Support'} title={'service'} />
              </div>
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
        onClick={() => router.push('/cases')}
      >
        More Cases
      </button>
    </div>
  );
};

export default OurCases;
