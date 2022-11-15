import React, {FC} from 'react';

interface TagProps {
    text: string;
    title?: string;
}

const Tag: FC<TagProps> = ({text, title}): JSX.Element => {
    return (
        <button className={"tag"}>
            <span className={"tagTitle"}>{title}</span>
            {text}
        </button>
    );
};

export default Tag;