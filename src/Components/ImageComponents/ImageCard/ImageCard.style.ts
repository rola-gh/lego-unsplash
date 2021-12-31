import styled from "styled-components";

interface ICard{
    bg: string | null;
}

export const Card = styled.div<ICard>`
    margin-bottom: 10px;
    position: relative;

    & .overlay{
        position: absolute;
        bottom: 0;
        background: rgb(0, 0, 0);
        background: rgba(0,0,0,0.45);
        //background-color: rgba(108,108,108,0.31);
        color: #f1f1f1;
        width: 100%;
        height:100%;
        transition: .5s ease;
        opacity:0;
        color: white;
        font-size: 20px;
        text-align: center;
    }

    & > a {
        position: relative;
        text-decoration: none;
        color: inherit;
        width: 100%;
        padding: 0;
        margin: 0;
        & > img {
            //max-width: 416px;
            width: 100%;
        }
    }

    &:hover{
        cursor: pointer;
        & .overlay{
            opacity: 1;
        }
    }
`