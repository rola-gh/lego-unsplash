import styled from "styled-components";

interface IContainer {
    imageUrl: string;
}

export const Container = styled.section<IContainer>`
    background-image: url(${props => props?.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 60vh;
    & > div{
        color:white;
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        gap: 2px;
        max-height: inherit;
        padding: 15vh;
        padding-inline: 20vw;
        background-color: rgba(0,0,0,0.4);
        @media (min-width: 768px){
            & > span{
                font-size: 46px;
                line-height: 1.2;
                font-weight: 700;
            }
            & > h1{
                font-size: 18px;
                font-weight: 400;
                margin-top: 16px;
            }
            & > p{
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 16px;
            }
        }
    }
` 