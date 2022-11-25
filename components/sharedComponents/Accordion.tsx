import React, {ReactNode, useState} from 'react';
import AccordionItem from "./AccordionItem";

export type AccordionData = {
    title: string;
    content: ReactNode
}

const Accordion = ({items}: { items: Array<AccordionData> }) => {

    const [currentIndex, setCurrentIndex] = useState(-1);
    const btnOnclick = (idx: number) => {
        setCurrentIndex(idx)
    }


    return (
        <ul className={"accordion section"}>
            {
                items.map((item, idx) => (
                    <AccordionItem key={idx} data={item} isOpen={idx === currentIndex}
                                   btnOnclick={() => btnOnclick(idx)}/>
                ))
            }
        </ul>
    );
};

export default Accordion;