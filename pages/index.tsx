import type {NextPage} from 'next';
import Head from 'next/head';
import Image from "next/image";

import partnership from "../assets/home-page/header_microsoft_partner_logo.webp";
import gearIcon from "../assets/home-page/gear_icon.webp";

const RootComponent: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home | UDS Systems</title>
                <meta property="title" key="title"
                      content="UDS Systems - Microsoft Dynamics 365 & Power Apps Development"/>
                <meta name="description" key="description"
                      content="UDS Systems is a team of skilled professionals who specialized in Microsoft Dynamics 365 ERP/CRM and Power Apps development. Microsoft implementation partner."/>
            </Head>
            <main className={"main"}>
                <div className={"firstScreen"}>
                    <div className={"content container"}>
                        <h1 className={"title"}>Grow your company`s potential with transparent reporting and empowering
                            tools</h1>
                        <p className={"subtitle"}>Explore our products and services built on Microsoft Dynamics 365,
                            PowerApps and AzureCloud.</p>
                        <Image className={"partnerLogo"} src={partnership}
                               alt={"Microsoft partner: Gold Data Analytics"}/>
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
                <div className={"services"}>
                    <div className={"container section"}>
                        <h2 className={"pageTitle"}>Our Services</h2>
                        <p className={"pageSubtitle"}>
                            We provide services directly to end users or collaborate with Microsoft partners as
                            subcontractors offering special conditions. We use a flexible pay-as-you-go model with clear
                            estimates and budget approval.
                        </p>
                        <div className={"serviceCases"}>
                            <div className={"service"}>
                                <Image src={gearIcon} alt={"Icon"} width={44} height={44}/>
                                <p className={"title"}>Consulting</p>
                                <p className={"subtitle"}>
                                    Want to fully benefit from the Dynamics 365?
                                    UDS R&D Departments build the bright strategy for achieving your business goals.
                                </p>
                            </div>
                            <div className={"service"}>
                                <Image src={gearIcon} alt={"Icon"} width={44} height={44}/>
                                <p className={"title"}>Integration & Implementation</p>
                                <p className={"subtitle"}>
                                    Want to rationally implement Dynamics 365 for business automation? The UDS complex
                                    approach relieves you of anxiety about the result.
                                </p>
                            </div>
                            <div className={"service"}>
                                <Image src={gearIcon} alt={"Icon"} width={44} height={44}/>
                                <p className={"title"}>Development & Customization</p>
                                <p className={"subtitle"}>
                                    Need smart tools for performing highly personalized tasks and improving Dynamics 365
                                    user experience? You are in the right place.
                                </p>
                            </div>
                            <div className={"service"}>
                                <Image src={gearIcon} alt={"Icon"} width={44} height={44}/>
                                <p className={"title"}>Support & Management</p>
                                <p className={"subtitle"}>
                                    Need a team of professionals to maintain your Dynamics 365?
                                    We offer you our best personnel and rich technical background.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </main>
        </div>
    );
};

export default RootComponent;
