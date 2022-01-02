import styled from 'styled-components'

export const  Wrapper = styled.div`
    align-items: center;
    display: inline-flex;
    max-width: 100%;  

`;

export const  AuthorImg = styled.div`
    margin-right: 8px;
    background-color: #eee;
    border-radius: 50%;
    display: block;
    overflow: hidden;
    width: 39px;
    height: 39px;
    & img{
      width: 100%;
      object-fit: cover;
    }
`;
export const AuthorName= styled.div`
    color: ${({ theme }) => theme.text};;
    text-decoration: none;
    text-shadow: 0 1px 8px #0000001a;
    will-change: opacity;
    display: block;
    font-size: 15px;
`;