import styled from "styled-components";

export const Container = styled.div`
    max-width: 80vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`

export const List = styled.div`
    min-height: 50vh;
    padding-top: 50px;
    padding-left: 12px;
    padding-right: 12px;
    align-items: start;
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    grid-column-gap: 24px;
    & > div {
        display: grid;
        grid-template-columns: minmax(0,1fr);
        row-gap: 24px;
    }
`

