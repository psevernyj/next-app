import React from 'react';
import Image from "next/image";
import caseManagement from "../../assets/cases/case_logo/case_management.webp";
import powerBI from "../../assets/implemented-products/powerBI.webp";
import powerAutomate from "../../assets/implemented-products/powerAutomate.webp";
import Tag from "./Tag";
import arrow from "../../assets/cases/orange_arrow.webp";

const CaseCard = () => {
    return <div className={"caseCard"}>
            <Image className={"thumbnail"} src={caseManagement} alt={"Case Logo"}/>
            <div className={"content"}>
                <div className={"products"}>
                    <div className={"product"}>
                        <Image src={powerBI} alt={"logo"} width={18} height={18}/>
                        <span className={"title"}>Power BI</span>
                    </div>
                    <div className={"product"}>
                        <Image src={powerAutomate} alt={"logo"} width={18} height={18}/>
                        <span className={"title"}>Power Automate</span>
                    </div>
                </div>
                <p className={"title"}>
                    Optimization of Case Management for
                    Medical Insurance Company
                </p>
                <div className={"actions"}>
                    <div className={"tags"}>
                        <Tag text={"Healthcare"} title={"industry"}/>
                        <Tag text={"Management"} title={"service"}/>
                    </div>
                    <button className={"arrowButton"}>
                        <Image src={arrow} alt={"Go to case page"} width={44} height={44}/>
                    </button>
                </div>
            </div>
        </div>
};

export default CaseCard;