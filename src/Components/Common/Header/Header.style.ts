import styled from "styled-components";

export const Header = styled.header`
    position: sticky;
    background: #fff;
    z-index: 2;
    top: 0;
    width: 100%;
    display: flex;
    box-shadow: inset 0 -1px #d1d1d1;
    justify-content: start;
    & > a {
        width: fit-content;
        margin: 10px;
    }
    & > div {
        width: 50%;
        margin: 10px;
    }
`;