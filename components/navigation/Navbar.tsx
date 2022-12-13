import React, { useState } from 'react';
import Link from 'next/link';
import NavItem, { NavItemProp } from './NavItem';
import Image from 'next/image';
import udsLogo from '../../assets/uds-logo/uds_logo.webp';
import { openExternalTab } from '../../helpers/openLinks';

const menuList: Array<NavItemProp> = [
  {
    text: 'Services',
    href: '/services',
    submenu: [
      {
        text: 'UDS Customer Service',
        href: '/services/uds-customer-service',
      },
      {
        text: 'UDS Sales Start',
        href: '/services/uds-sales-start',
      },
    ],
  },
  {
    text: 'Our Cases',
    href: '/cases',
  },
  {
    text: 'Add-ons',
    href: '/add-ons',
    submenu: [
      {
        text: 'UDS STORAGE ANALYZER',
        href: '/add-ons/storage-analyzer',
      },
      {
        text: 'UDS VIRTUAL MACHINE',
        href: '/add-ons/dynamics-365-virtual-machine',
      },
      {
        text: 'UDS MIGRATION CALCULATOR',
        href: '/add-ons/migration-calculator',
      },
      {
        text: 'UDS DATA MIGRATION TOOL',
        href: '/add-ons/data-migration-tool',
      },
      {
        text: 'UDS INTERFACE SWITCHER',
        href: '/add-ons/interface-switcher',
      },
      {
        text: 'UDS BUG HANDLER',
        href: '/add-ons/bug-handler',
      },
      {
        text: 'UDS LICENSE CALCULATOR',
        href: '/add-ons/license-calculator',
      },
      {
        text: 'UDS DUPLICATE CHECKER',
        href: '/add-ons/duplicate-checker',
      },
      {
        text: 'UDS BUSINESS DATA MASKING',
        href: '/add-ons/business-data-masking',
      },
    ],
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'Contact Us',
    href: '/contact-us',
    submenu: [
      {
        text: 'UDS Systems',
        href: 'https://wa.me/message/WWXS4JHYO3VKF1',
      },
      {
        text: 'info@uds.systems',
        href: 'mailto:info@uds.systems',
      },
      {
        text: 'uds.systems',
        href: 'skype:live:uds_ddt?chat',
      },
    ],
  },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={'header'}>
      <nav className={'nav container'}>
        <Link href={'/'} onClick={() => setActiveIdx(-1)}>
          <Image src={udsLogo} alt={'Logo'} />
        </Link>
        <div className={'menuBar'} onClick={() => setNavActive(!navActive)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? 'active' : ''} menuList`}>
          {menuList.map((menu, idx) => {
            return (
              <div
                className={'menu-items'}
                key={menu.text}
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
              >
                <NavItem
                  text={menu.text}
                  href={menu.href}
                  submenu={menu.submenu}
                  active={activeIdx === idx}
                />
              </div>
            );
          })}
          <div className={'menuActions'}>
            <button
              className={'button blueButton smallButton'}
              onClick={openExternalTab('https://my.uds.systems/')}
            >
              Go to the portal
            </button>
            <button className={'button orangeButton smallButton'}>
              Book a call
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
      </nav>
    </header>
  );
};

export default Navbar;
