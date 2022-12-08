import {NextPage} from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import {privacyItems} from "../../utils/privacyAndTermsData";

const Accordion = dynamic(() => import("../../components/sharedComponents/Accordion"))
const Contacts = dynamic(() => import("../../components/sharedComponents/Contacts"))

const PrivacyPolicyComponent: NextPage = () => {

    return (
        <div>
            <Head>
                <title>Privacy Policy | UDS Systems</title>
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
