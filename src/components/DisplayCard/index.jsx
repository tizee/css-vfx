import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import TagCard from '../TagCard';

const Wrapper = styled.div.attrs({
    searchTags: (props) => props.searchTags,
    customName: 'test',
})`
    position: relative;
    display: grid;
    grid-template-rows: auto minmax(0px, 1fr);
    width: 100%;
    justify-items: center;
    padding: 1rem;
`;

const Header = styled.header`
    justify-self: start;
    & > h1 {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    & > p {
        display: flex;
        align-items: center;
        margin: 1rem 0;
    }
    margin: 1rem 0;
`;

const Section = styled.section`
    position: relative;
    width: 100%;
`;

const DisplayCard = (props) => {
    const { name, tags } = props;
    return (
        <div search-tags={tags.join(',')} search-name={name}>
            <Wrapper>
                <Header>
                    <h1>{name}</h1>
                    <p>
                        <TagCard tags={tags}></TagCard>
                    </p>
                </Header>
                <Section>
                    <Card>{props.children}</Card>
                </Section>
            </Wrapper>
        </div>
    );
};

export default DisplayCard;
