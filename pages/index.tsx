import type { NextPage } from 'next';
import Head from 'next/head';
import Image from "next/image";

import partnership from "../assets/home-page/header_microsoft_partner_logo.webp";

const RootComponent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | UDS Systems</title>
          <meta property="og:title" key="title" content="UDS Systems - Microsoft Dynamics 365 & Power Apps Development"/>
          <meta name="og:description" key="description" content="UDS Systems is a team of skilled professionals who specialized in Microsoft Dynamics 365 ERP/CRM and Power Apps development. Microsoft implementation partner." />
      </Head>
      <main className={"main"}>
          <div className={"firstScreen"}>
              <div className={"content container"}>
                  <h1 className={"title"}>Grow your company`s potential with transparent reporting and empowering tools</h1>
                  <p className={"subtitle"}>Explore our products and services built on Microsoft Dynamics 365, PowerApps and AzureCloud.</p>
                  <Image className={"partnerLogo"} src={partnership} alt={"Microsoft partner: Gold Data Analytics"}/>
              </div>
          </div>
          <div className={"companyInfo"}>
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
      </main>
    </div>
  );
};

export default RootComponent;
