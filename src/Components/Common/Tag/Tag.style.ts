import styled from 'styled-components'

export const TagContainer = styled.div`
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    color: ${(props) => props.style?.color || '#767676'};
    cursor: pointer;
    display: flex;
    overflow: hidden;
    transition: background-color .1s ease-in-out;
    max-width: fit-content;
    
    & > img{
        border-style: none;
    }

    &:hover{
        background-color: ${(props) => props.style?.backgroundColor || '#f5f5f5'}
    }
`;

export const Tag = styled.div`
    align-items: center;
    display: flex;
    padding: 8px 16px;
`;
