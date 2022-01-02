import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    & > svg {
        animation: logo 2s ease-in-out infinite alternate;
        -webkit-animation: logo 2s ease-in-out infinite alternate;

        @keyframes logo {
            0% {
                transform: scale(1.0);
                -webkit-transform: scale(1.0);
            }
            100% {
                transform: scale(2.0);
                -webkit-transform: scale(2.0);
            }
        }
    }
`;