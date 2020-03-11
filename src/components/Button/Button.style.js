import styled from 'styled-components';
import Colors from '../Colors';

const Button = styled.button`
    background: ${(props) => (props.primary ? Colors.Pink : 'white')};
    color: ${(props) => (props.primary ? 'white' : Colors.Pink)};

    font-size: 1.2rem;
    margin: 1rem;
    padding: 0.25rem 1rem;
    border: 2px solid ${Colors.Pink};
    border-radius: 6px;
`;

export default Button;
