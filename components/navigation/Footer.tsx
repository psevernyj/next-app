import React from 'react';
import Image from 'next/image';
import udsLogo from '../../assets/uds-logo/uds_logo.webp';
import dynamicsLogo from '../../assets/footer/microsoft_dynamics_365_logo.webp';
import microsoftLogo from '../../assets/footer/microsoft_logo.webp';
import whatsapp from '../../assets/footer/whatsapp.webp';
import mail from '../../assets/footer/mail.svg';
import skype from '../../assets/footer/skype.svg';
import twitter from '../../assets/footer/twitter.svg';
import linkedIn from '../../assets/footer/linkedIn.svg';
import facebook from '../../assets/footer/facebook.svg';
import youtube from '../../assets/footer/youtube.svg';
import insta from '../../assets/footer/insta.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'mainFooter container'}>
        <Image className={'logo'} src={udsLogo} alt={'UDS Systems'} />
        <div className={'linksSection'}>
          <p className={'header'}>Links</p>
          <div className={'links'}>
            <div className={'column'}>
              <Link href={'/'} className={'link'}>
                Home
              </Link>
              <Link href={'/services'} className={'link'}>
                Services
              </Link>
              <Link href={'/cases'} className={'link'}>
                Our Cases
              </Link>
              <Link href={'/add-ons'} className={'link'}>
                Add-ons
              </Link>
            </div>
            <div className={'column'}>
              <Link href={'/education'} className={'link'}>
                Education
              </Link>
              <Link href={'/blog'} className={'link'}>
                Blog
              </Link>
              <Link href={'/contact-us'} className={'link'}>
                Contact Us
              </Link>
              <a
                href={'https://my.uds.systems/add-ons'}
                target={'_blank'}
                rel="noreferrer"
                className={'link'}
              >
                UDS Portal
              </a>
            </div>
          </div>
        </div>
        <div className={'contacts'}>
          <p className={'header'}>Contact Us</p>
          <div className={'column'}>
            <div className={'contact'}>
              <Image src={whatsapp} alt={'whatsapp'} />
              <a
                href="https://wa.me/message/WWXS4JHYO3VKF1"
                className={'link'}
                target="_blank"
                rel="noreferrer"
              >
                UDS Systems
              </a>
            </div>
            <div className={'contact'}>
              <Image src={mail} alt={'mail'} />
              <a href="mailto:info@uds.systems" className={'link'}>
                info@uds.systems
              </a>
            </div>
            <div className={'contact'}>
              <Image src={skype} alt={'skype'} />
              <a href="skype:live:uds_ddt?chat" className={'link'}>
                uds.systems
              </a>
            </div>
          </div>
        </div>
        <div className={'subscribingAndPartners'}>
          <div className={'subscribeForm'}>
            <p className={'header'}>Subscribe to our news</p>
            <input placeholder={'E-mail'} />
          </div>
          <div className={'partners'}>
            <div>
              <Image src={dynamicsLogo} alt={'Microsoft'} />
            </div>
            <div>
              <Image src={microsoftLogo} alt={'Microsoft'} />
            </div>
          </div>
        </div>
      </div>
      <div className={'subFooter'}>
        <div className={'container content'}>
          <div className={'rights'}>
            <p className={'rightsTitle'}>
              UDS Systems © 2022 All Rights reserved
            </p>
            <Link className={'link'} href={'/privacy-policy'}>
              Privacy Policy
            </Link>
            <Link className={'link'} href={'/terms-and-conditions'}>
              Terms and conditions
            </Link>
          </div>
          <div className={'socialMedia'}>
            <a
              aria-label="Join our Twitter"
              href="https://twitter.com/UDS_systems"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={twitter} alt={'Twitter'} />
            </a>
            <a
              aria-label="Join our LinkedIn"
              href="https://www.linkedin.com/company/uds-systems"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={linkedIn} alt={'LinkedIn'} />
            </a>
            <a
              aria-label="Join our Facebook"
              href="https://www.facebook.com/UDS.systems/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={facebook} alt={'Facebook'} />
            </a>
            <a
              aria-label="Join our Youtube"
              href="https://www.youtube.com/channel/UCx443BQ2U4gGXLPYB8Nu3bg"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={youtube} alt={'YouTube'} />
            </a>
            <a
              aria-label="Join our Instagram"
              href="https://www.instagram.com/uds.systems/?igshid=YmMyMTA2M2Y%3D"
              rel="noreferrer"
              target="_blank"
            >
              <Image src={insta} alt={'Instagram'} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
