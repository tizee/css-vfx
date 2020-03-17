import React from 'react';
import ReactIcon from '../../images/react.png';
import ReactSpringIcon from '../../images/react-spring.png';
import Tag from '../Tag';

const TagCard = ({ tags }) => {
    return tags.map((tag) => {
        if (tag === 'React') {
            return (
                <Tag key={tag}>
                    <img src={ReactIcon} height='16px' width='16px'></img>
                    {tag}
                </Tag>
            );
        }
        if (tag === 'React-spring') {
            return (
                <Tag key={tag}>
                    <img src={ReactSpringIcon} height='16px' width='16px'></img>
                    {tag}
                </Tag>
            );
        }
        return <Tag key={tag}>{tag}</Tag>;
    });
};

export default TagCard;
