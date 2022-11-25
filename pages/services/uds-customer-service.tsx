import {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import benefitItem from "../../assets/services/microsoft_365_sales/compromise.svg";

const UdsCustomerService: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Customer Service | UDS Services | UDS Systems</title>
                <meta name="description" content=" UDS Sales Start page"/>
            </Head>
            <main className={"main servicePage"}>
                <div className={"firstScreen"}>
                    <div className={"container content"}>
                        <h1 className={"title"}>
                            Microsoft Dynamics 365 Customer Service. Quick Start
                        </h1>
                        <p className={"subtitle"}>
                            Want to optimise and scale your customer service management with minimal resources? Quick
                            Start with Microsoft Dynamics 365 Customer Service includes everything to minimum resources,
                            reach this aim and more!
                        </p>
                        <p className={"subtitle"}>
                            Need reliable contractors to help you with this? Our sacred task is to deliver quality
                            service on the agreed time.
                        </p>
                        <button className={"button orangeButton bigButton"}>
                            See a service roadmap
                        </button>
                    </div>
                </div>

                <div className={"turnkeySettings section"}>
                    <h2 className={"pageTitle container"}>Get Turnkey Settings In 3-5 Weeks</h2>
                    <div className={"content container"}>
                        <p className={"paragraph"}>
                            Microsoft Dynamics 365 Customer Service was designed to unite and level up all the steps of
                            your Customer Service chain
                            and, as a result, rock customer loyalty and boost sales.
                        </p>
                        <p className={"paragraph"}>
                            To fasten the return on investments, we offer you a service package containing everything
                            needed for the correct start.
                        </p>
                    </div>
                </div>
                <div className={"benefits section"}>
                    <h2 className={"pageTitle"}>Benefits</h2>
                    <div className={"benefitsList container"}>
                        <div className={"benefit"}>
                            <Image src={benefitItem} alt={"Icon"} className={"benefitIcon"}/>
                            <p className={"title"}>Focus on client</p>
                            <p className={"paragraph"}>
                                By configuring the Customer Service Module, we think about effective ways to organize
                                flows and data. You devote all your attention to advanced client care.
                            </p>
                        </div>
                        <div className={"benefit"}>
                            <Image src={benefitItem} alt={"Icon"} className={"benefitIcon"}/>
                            <p className={"title"}>Software adopting</p>
                            <p className={"paragraph"}>
                                We launch the system carefully taking into account all the aspects of customer
                                management that are specific to your company.
                            </p>
                        </div>
                        <div className={"benefit"}>
                            <Image src={benefitItem} alt={"Icon"} className={"benefitIcon"}/>
                            <p className={"title"}>Resources saving</p>
                            <p className={"paragraph"}>
                                The solid experience behind UDS Systems allows us to rationally distribute the project
                                time and significantly reduce the cost of
                                our services.
                            </p>
                        </div>
                        <div className={"benefit"}>
                            <Image src={benefitItem} alt={"Icon"} className={"benefitIcon"}/>
                            <p className={"title"}>Fast troubleshooting</p>
                            <p className={"paragraph"}>
                                We promptly inform you about the project's progress and are generous with clarifications
                                and assistance when necessary.
                            </p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default UdsCustomerService;
