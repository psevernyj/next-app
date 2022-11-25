import React, {useEffect, useRef, useState} from 'react';
import {AccordionData} from "./Accordion";

const AccordionItem = ({
                           data,
                           isOpen,
                           btnOnclick
                       }: {
    data: AccordionData,
    isOpen: boolean,
    btnOnclick: () => void
}) => {

    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (isOpen) {
            const contentEl = contentRef.current as HTMLDivElement
            setHeight(contentEl?.scrollHeight)
        } else {
            setHeight(0)
        }

    }, [isOpen])

    return (
        <li className={`accordionItem ${isOpen ? 'active' : ''}`}>
            <h2 className={"title"}>
                <button className={"itemButton"} onClick={btnOnclick}>
                    {data.title}
                </button>
            </h2>
            <div className={"content"} style={{height}}>
                <div className={"paragraph"} ref={contentRef}>
                    {data.content}
                </div>
            </div>
        </li>
    );
};

export default AccordionItem;