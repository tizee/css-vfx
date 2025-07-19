import React, { Fragment } from 'react';
import Card from '../components/DisplayCard';

import NumberAni from './number';
import ScrollAni from './scroll';
import Jump from './jump/spring';
import ClickRotate from './click-rotate';
import CubeBox from './cube-3d';
import CubeLoader from './cube-loader/cubeLoader';
import CubeLoaderVal from './cube-loader/cubeLoader_load';
import DraggableList from './draggableList';
import DraggableItem from './draggable-item';
import ImageSpinReact from './image-spin/react';
import ImageSpinCSS from './image-spin/css';
import PulseHeart from './pulse/react';
import CardDeck from './card-stack';
import PopIntro from './pop-intro';
import FadeIn from './Fade-in-out';
import CarouselScroll from './carousel-scroll';
import TypeWriter from './Typewriter';
import MasonaryLayout from './masonary-layout';
import CarouselFade from './carousel-fade';
import Filter from './filter';
import Clock from './clock';
import Float from './float';
import CarouselCSS from './carousel-css';

const Collections = () => (
    <Fragment>
        <Card name='Filter' tags={['React']}>
            <Filter />
        </Card>
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
        <Card name='JoJo Tarot Cards' tags={['React', 'React-spring']}>
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
        <Card name='Masonary Grid Layout' tags={['React', 'React-spring']}>
            <MasonaryLayout></MasonaryLayout>
        </Card>
        <Card name='Carousel Fade in' tags={['React']}>
            <CarouselFade></CarouselFade>
        </Card>
        <Card name='Clock' tags={['React']}>
            <Clock />
        </Card>
        <Card name='float' tags={['React']}>
            <Float />
        </Card>
        <Card name='Carousel CSS' tags={['React']}>
            <CarouselCSS />
        </Card>
    </Fragment>
);

export default Collections;
