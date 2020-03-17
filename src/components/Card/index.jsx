import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    font-weight: 600;
    font-size: 2rem;
    padding: 0.5rem;
    height: 300px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all ease-in 300ms;
    border-radius: 18px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
    &:hover {
        transform: scale(1.1);
        box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
    }
`;

export default Card;
