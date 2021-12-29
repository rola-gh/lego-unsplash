import styled from "styled-components";

export const SliderContainer = styled.div`
    margin-top: 24px;
    isolation: isolate;
    position: relative;
`
export const Slider = styled.div`
    &::before{
        bottom: 0;
        content: "";
        display: block;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: opacity .2s ease-in-out;
        z-index: 1;
    }

    &::after{
        background: linear-gradient(
            90deg,#fff0 0,#fff 90%,#fff);
        right: 0;
    }

    @media (min-width: 768px){
        &:after, &:before {
            width: 200px;
        }
    }
`
export const Control = styled.div`
    align-items: center;
    display: flex;
    position: absolute;
    z-index: 2;
    cursor: pointer;
`
export const NextControl = styled(Control)`
    right: 0;
    & > button {
        padding-left: 8px;
        background-color: initial;
        border: none;
        padding: 0;
        text-align: inherit;
    }
`
export const PrevControl = styled(Control)`
    left: 0;
    & > button {
        padding-right: 8px;
        background-color: initial;
        border: none;
        padding: 0;
        text-align: inherit;
    }
`
export const TagsContainer = styled.div`
    box-sizing: initial;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
    margin-bottom: 0;
    margin-left: -8px;
    gap:5px;
`