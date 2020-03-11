import React from 'react';
import { hot } from 'react-hot-loader/root';

import styled from 'styled-components';
import Layout from './layouts/base';
import SearchBox from './components/InputBox';
import Card from './components/Card';
import Title from './components/Title';
import { lessImportant } from './components/Colors';

const Header = styled.header`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    justify-content: stretch;
    margin: 30px 0;
    width: 100%;
`;

const IntroBanner = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    justify-content: stretch;
`;
const IntroParagraph = styled.p`
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    color: ${lessImportant};
`;
const Form = styled.form`
    margin: 1em 0;
`;

const LibraryArea = styled.div`
    position: relative;
    margin: 1rem 0;
    padding: 1rem;
    min-height: 520px;
    width: 100%;

    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-flow: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

const App = () => {
    let animations = [1, 2, 3, 4];
    return (
        <Layout>
            <Header>
                <IntroBanner>
                    <Title>Tizee&apos;s Animation Kit</Title>
                    <IntroParagraph>
                        A collection of animations implemented with css and
                        javascript
                    </IntroParagraph>
                </IntroBanner>
                <Form>
                    <SearchBox
                        placeholder='animation name'
                        name='animation'
                        type='text'
                        labelName='Search'
                    />
                </Form>
            </Header>
            <LibraryArea>
                {animations.map((el) => (
                    <Card key={el}>{el}</Card>
                ))}
            </LibraryArea>
        </Layout>
    );
};

export default hot(App);
