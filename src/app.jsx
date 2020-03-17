import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';

import Layout from './layouts/base';
import SearchBox from './components/InputBox';
import Card from './components/DisplayCard';
import Title from './components/Title';
import { lessImportant } from './Colors';

import NumberAni from './animations/number';
import ScrollAni from './animations/scroll';
import Jump from './animations/jump/spring';
import ClickRotate from './animations/click-rotate';
import CubeBox from './animations/cube-3d';
import CubeLoader from './animations/cube-loader/cubeLoader';
import CubeLoaderVal from './animations/cube-loader/cubeLoader_load';
import DraggableList from './animations/draggableList';
import DraggableItem from './animations/draggable-item';
import ImageSpinReact from './animations/image-spin/react';
import ImageSpinCSS from './animations/image-spin/css';
import PulseHeart from './animations/pulse/react';
import CardDeck from './animations/card-stack';
import PopIntro from './animations/pop-intro';
import FadeIn from './animations/Fade-in-out';
import CarouselScroll from './animations/carousel-scroll';
import TypeWriter from './animations/Typewriter';

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
`;

class App extends Component {
    render() {
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
                    <Card name='Number' tags={['React', 'React-spring']}>
                        <NumberAni></NumberAni>
                    </Card>
                    <Card name='Scroll' tags={['React', 'React-spring']}>
                        <ScrollAni></ScrollAni>
                    </Card>
                    <Card name='Pop out' tags={['React', 'React-spring']}>
                        <Jump></Jump>
                    </Card>
                    <Card name='Rotate' tags={['React', 'React-spring']}>
                        <ClickRotate></ClickRotate>
                    </Card>
                    <Card name='Cube' tags={['React']}>
                        <CubeBox></CubeBox>
                    </Card>
                    <Card name='Cube Loader' tags={['React', 'React-spring']}>
                        <CubeLoader></CubeLoader>
                    </Card>
                    <Card name='Controlled Cube Loader ' tags={['React']}>
                        <CubeLoaderVal></CubeLoaderVal>
                    </Card>
                    <Card name='DraggableList' tags={['React', 'React-spring']}>
                        <DraggableList></DraggableList>
                    </Card>
                    <Card name='DraggableItem' tags={['React', 'React-spring']}>
                        <DraggableItem></DraggableItem>
                    </Card>
                    <Card name='Image Spin' tags={['React']}>
                        <ImageSpinReact></ImageSpinReact>
                    </Card>
                    <Card name='Image Spin' tags={['React', 'CSS']}>
                        <ImageSpinCSS></ImageSpinCSS>
                    </Card>
                    <Card name='Pulse Heart' tags={['React']}>
                        <PulseHeart></PulseHeart>
                    </Card>
                    <Card
                        name='JoJo Tarot Cards'
                        tags={['React', 'React-spring']}
                    >
                        <CardDeck></CardDeck>
                    </Card>
                    <Card name='Anime Text' tags={['React', 'React-spring']}>
                        <PopIntro></PopIntro>
                    </Card>
                    <Card name='Fade In' tags={['React', 'React-spring']}>
                        <FadeIn></FadeIn>
                    </Card>
                    <Card name='Carousel vertical' tags={['React']}>
                        <CarouselScroll></CarouselScroll>
                    </Card>
                    <Card name='React Typewriter' tags={['React']}>
                        <TypeWriter></TypeWriter>
                    </Card>
                </LibraryArea>
            </Layout>
        );
    }
}

export default hot(App);
