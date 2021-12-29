import styled from 'styled-components';

export const Tag = styled.div`
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    color: ${(props) => props.color || '#767676'};
    cursor: pointer;
    display: flex;
    overflow: hidden;
    transition: background-color .1s ease-in-out;

    &:hover{

    }
`;