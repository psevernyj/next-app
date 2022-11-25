import {NextPage} from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Accordion = dynamic(() => import("../../components/sharedComponents/Accordion"))
const Contacts = dynamic(() => import("../../components/sharedComponents/Contacts"))

const PrivacyPolicyComponent: NextPage = () => {

    const privacyItems = [
        {
            title: "UDS Systems may be contacted as follows:",
            content: <div className={"addressContent"}>
                <div className={"address"}>
                    <div className={"item"}>
                        UDS SYSTEMS LTD
                    </div>
                    <div className={"item"}>
                        Unit 7118, Second Floor,
                        6 Market Place
                    </div>
                    <div className={"item"}>
                        London, Fitzrovia,
                        United Kingdom, W1W 8AF
                    </div>
                    <div className={"item"}>
                        <a href={"mailto:info@uds.systems"} className={"link"} aria-label={"Our mail"}>
                            info@uds.systems
                        </a>
                    </div>
                    <div className={"item"}>
                        <a href={"mailto:portal@uds.systems"} className={"link"} aria-label={"Our mail"}>
                            portal@uds.systems
                        </a>
                    </div>
                </div>
                <div className={"paragraphSection"}>
                    <p className={"paragraph"}>
                        This Privacy Policy ("Privacy Policy") applies to UDS Systems as well as website <a
                        href={"https://uds.systems/"} className={"orangeLink"}>https://uds.systems/</a> or <a
                        href={"https://my.uds.systems/"}
                        className={"orangeLink"}>https://my.uds.systems/</a> (hereinafter, "us", "we", “Website”). We
                        respect your privacy and are committed
                        to protecting personal data you may
                        provide us through the Website. We have adopted this Privacy Policy to explain what information
                        may be collected on our
                        Website, how, and under what conditions we collect and process this information as well as
                        conditions of its disclosure to third parties. This Privacy Policy applies only to information
                        we collect through the Website and does not apply to our collection of information from other
                        sources.
                    </p>
                    <p className={"paragraph"}>
                        This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the
                        general rules and policies governing your use of our Website. When purchasing additional
                        services, you may be required to agree to additional terms and conditions.
                    </p>
                    <p className={"paragraph"}>
                        We may from time to time revise this Privacy Policy, inter alia, to comply with applicable laws.
                        While we shall do our best to inform you of any changes, it is your duty to review this Privacy
                        Policy from time to time.
                    </p>

                </div>
            </div>
        },
        {
            title: "Lawful collection and processing",
            content: "You are not required to provide us your personal data, but without adequate information we will not be able to provide you with some of our services."
        },
        {
            title: "Objectives of processing personal data",
            content: "We render products or services relating to easing operation of and access to third party services, including but not limited to Microsoft Dynamics 365, PowerApps and Azure. We require your personal data in order to render services to:"
        },
        {
            title: "Processed personal data",
            content: "We render products or services relating to easing operation of and access to third party services, including but not limited to Microsoft Dynamics 365, PowerApps and Azure. We require your personal data in order to render services to:"
        },
        {
            title: "Disclosure of your personal data to third parties",
            content: "test"
        },
        {
            title: "Personal data storage",
            content: "test"
        },
        {
            title: "Rights of personal data subjects",
            content: "test"
        },
        {
            title: "Security",
            content: "test"
        },
        {
            title: "Cookies",
            content: "test"
        },
        {
            title: "Advertisements",
            content: "test"
        },
        {
            title: "Links to external sites",
            content: "test"
        },
        {
            title: "Affiliate Disclosure",
            content: "test"
        },
    ]

    return (
        <div>
            <Head>
                <title>Privacy Policy | UDS Systems</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={"main privacy"}>
                <div className={"firstScreen"}>
                    <div className={"content container"}>
                        <h1 className={"title"}>
                            Welcome to our Privacy Policy
                        </h1>
                        <p className={"subtitle"}>
                            Your privacy is critically important for us
                        </p>
                    </div>
                </div>
                <div className={"content container"}>
                    <Accordion items={privacyItems}/>
                </div>
                <Contacts/>
            </main>
        </div>
    );
};

export default PrivacyPolicyComponent;
