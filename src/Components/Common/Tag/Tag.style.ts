import styled from 'styled-components'


export const TagContainer = styled.div`
    ${(props) => props.style?.border ?  `border: ${props.style?.border}`: 'border: none'};
    border-radius: 4px;
    color: ${(props) => props.style?.color || '#767676'};
    cursor: pointer;
    display: flex;
    overflow: hidden;
    transition: background-color .1s ease-in-out;
    min-width: fit-content;
    background-color: ${(props) => props.style?.backgroundColor || '#f5f5f5'};

    & > img{
        border-style: none;
    }

    & > a{
        color: inherit;
        text-decoration: none;
    }
`;

export const Tag = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 8px 16px;
    text-decoration: none;
`;
