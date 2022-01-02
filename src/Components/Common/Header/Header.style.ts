import styled from "styled-components";

export const Header = styled.header`
    position: sticky;
    background: ${({theme}) => theme.body};
    z-index: 200;
    top: 0;
    width: 100%;
    display: flex;
    box-shadow: inset 0 -1px ${({theme}) => theme.gradient};
    justify-content: start;
    & > a {
        width: fit-content;
        padding: 10px;
        background: #fff;
    }
    & > div {
        width: 50%;
        margin: 10px;
    }
`;