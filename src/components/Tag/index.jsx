import styled from 'styled-components';

const TagSpan = styled.span`
    position: relative;
    background: #669bff;
    border-radius: 8px;
    padding: 0.25rem;
    margin-right: 0.5rem;
    font-size: 1rem;
    color: white;
    font-weight: 500;
    text-align: center;
    display: inline-flex;
    align-items: center;
    > img {
        margin-right: 0.1rem;
        border-radius: 10px;
    }
`;

export default TagSpan;
