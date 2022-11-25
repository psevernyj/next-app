import {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";

import benefitItem from "../../assets/services/microsoft_365_sales/compromise.svg";
import quickStart from "../../assets/services/microsoft_365_sales/sales_map.svg";

const UdsSalesStart: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Microsoft D365 Sales | UDS Services | UDS Systems</title>
                <meta name="description" content=" UDS Sales Start page"/>
            </Head>
            <main className={"main servicePage"}>
                <div className={"firstScreen"}>
                    <div className={"container content"}>
                        <h1 className={"title"}>
                            Microsoft Dynamics 365 Sales. Quick Start
                        </h1>
                        <p className={"subtitle"}>
                            Are you looking for some advanced software to standardize your sales and bring your company
                            to the
                            next level? Then Microsoft Dynamics 365 Sales is a perfect match!
                        </p>
                        <p className={"subtitle"}>
                            Want to know for sure what to prepare, where to start, and how much time and resources to
                            allocate?
                            Then you will like our easy,
                            well-thought-out and risk-free approach.
                        </p>
                        <button className={"button orangeButton bigButton"}>
                            1, 2, 3… GO!
                        </button>
                    </div>
                </div>
                <div className={"turnkeySettings section"}>
                    <h2 className={"pageTitle container"}>Get Turnkey Settings In 3-5 Weeks</h2>
                    <div className={"content container"}>
                        <p className={"paragraph"}>
                            Push up your sales with Microsoft Dynamics 365 Sales and UDS Systems. Such a mix will let
                            you feel confident that your CRM works for you not you are working for your CRM. Here you
                            will find a service package including everything you need for a successful start. Keep in
                            mind that an experienced and attentive team will lead this project.
                        </p>
                    </div>
                </div>
                <div className={"benefits section"}>
                    <h2 className={"pageTitle"}>Benefits</h2>
                    <div className={"benefitsList container"}>
                        <div className={"benefit"}>
                            <Image src={benefitItem} alt={"Icon"} className={"benefitIcon"}/>
                            <p className={"title"}>Focus on profit</p>
                            <p className={"paragraph"}>
                                You will get a clear implementation plan and plan performers to
                                skip all that settings stress and get CRM ready to make a significant profit.
                            </p>
                        </div>
                        <div className={"benefit"}>
                            <Image src={benefitItem} alt={"Icon"} className={"benefitIcon"}/>
                            <p className={"title"}>No compromise</p>
                            <p className={"paragraph"}>
                                We will adapt your CRM to your needs from the very beginning so you can stop worrying
                                about what system is
                                the best choice.
                            </p>
                        </div>
                        <div className={"benefit"}>
                            <Image src={benefitItem} alt={"Icon"} className={"benefitIcon"}/>
                            <p className={"title"}>Wise prices</p>
                            <p className={"paragraph"}>
                                The secret of a rational budget we provide to you is the same time-tested implementation
                                plan without redundant steps and questionable features.
                            </p>
                        </div>
                        <div className={"benefit"}>
                            <Image src={benefitItem} alt={"Icon"} className={"benefitIcon"}/>
                            <p className={"title"}>Support team</p>
                            <p className={"paragraph"}>
                                Providing a service, we are interested in your smooth user experience. Let’s be honest,
                                so you will more likely choose us for the long-term partnership.
                            </p>
                        </div>
                    </div>

                </div>
                <div className={"quickStart section"}>
                    <h2 className={"pageTitle"}>UDS Quick start sales</h2>
                    <div className={"container content"}>
                        <Image src={quickStart} alt={"Quick Start Map"}/>
                    </div>
                </div>
                <div className={"objection section"}>
                    <h2 className={"pageTitle"}>What if</h2>
                    <div className={"objectionList container"}>
                        <div className={"objection"}>
                            <p className={"title"}>… the result does not match my expectations?</p>
                            <p className={"paragraph"}>
                                We start working on the project only after gathering all the
                                requirements and goal approval. You will be informed about project progress and can
                                always make sure everything goes according to plan.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UdsSalesStart;
