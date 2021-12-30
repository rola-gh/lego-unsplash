import styled from 'styled-components';

export const ImgInfo = styled.div`
    grid-row-gap: 4px;
    align-self: flex-start;
    color: #767676;
    display: grid;
    grid-area: details;
    min-width: 0;
`;

export const InfoItem = styled.div`
    display: flex;
`;

export const InfoIcon = styled.svg`
    fill: #767676;
    flex-shrink: 0;
    margin-right: 8px;
    margin-top: 3px;
`;

export const InfoSpan = styled.span`
    font-size: 14px;
`;