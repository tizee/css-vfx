import React from 'react';
import styled from 'styled-components';
import { lessImportant } from '../Colors';

const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    min-width: 410px;
`;

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 1.5rem 2rem;
    max-width: 940px;

    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

const Nav = styled.nav`
    position: relative;
    height: 90px;
    line-height: 60px;
`;
const NavWrapper = styled.div`
    position: relative;
    height: 90px;
    line-height: 60px;
    padding-left: 60px;
    padding-right: 60px;
    max-width: 1284px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

const LeftBlock = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    color: ${lessImportant};
    &::before {
        transition: transform ease-in 200ms;
        position: absolute;
        content: '⇠ ';
        left: -20px;
    }
    &:hover {
        color: inherit;
        &::before {
            transform: translateX(-10px);
        }
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: 1.1rem;
    font-weight: 600;
`;

const Footer = styled.footer`
    height: 100%;
    position: relative;
`;

const FooterWrapper = styled(Wrapper)`
    justify-content: center;
    color: ${lessImportant};
`;

const BaseLayout = (props) => {
    return (
        <Container>
            <Nav>
                <NavWrapper>
                    <LeftBlock>
                        <Link
                            href='https://tizee.github.io'
                            target='_blank'
                            referrerpolicy='no-referrer'
                        >
                            Blog
                        </Link>
                    </LeftBlock>
                </NavWrapper>
            </Nav>
            <Wrapper>{props.children}</Wrapper>
            <Footer>
                <FooterWrapper>
                    <p>Made by Tizee</p>
                </FooterWrapper>
            </Footer>
        </Container>
    );
};

export default BaseLayout;
