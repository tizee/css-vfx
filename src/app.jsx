import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import search from './helpers/search';

import Layout from './layouts/base';
import SearchBox from './components/InputBox';
import Title from './components/Title';
import { lessImportant } from './Colors';
import Collections from './animations/collections';

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
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-flow: row;
    align-items: center;
    justify-content: center;
    justify-items: center;
    gap: 2rem;

    > div[aria-hidden] {
        display: none;
    }
`;

const App = () => {
    const [inputVal, setInput] = useState('');
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
                <Form onSubmit={(e) => e.preventDefault()}>
                    <SearchBox
                        placeholder='animation name'
                        name='animation'
                        type='text'
                        labelName='Search'
                        handleInput={(e) => {
                            setInput(e.target.value);
                            search(e.target.value);
                        }}
                        value={inputVal}
                    />
                </Form>
            </Header>
            <LibraryArea>
                <Collections></Collections>
            </LibraryArea>
        </Layout>
    );
};

export default hot(App);
