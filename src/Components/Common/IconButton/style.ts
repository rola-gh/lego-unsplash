import styled from 'styled-components';

interface Props {
    width?: string,
    height?: string,
    color?: string,
}

export const Wrapper = styled.button<Props>`
    padding:0.25em 0.9em;
    box-shadow: 0 1px 2px #0000000f;
    height: 32px;
    line-height: 30px;
    border: 1px solid #0000;
    border-radius: 4px;
    transition: all .1s ease-in-out;
    cursor: pointer;
    &:hover{
      border: 1px solid #0000;
      background-color: #ffffff; 
      box-shadow: 0 1px 2px #0000000f;

    }
  & svg {
    height: ${props => (props.height ? `${props.height}px` : null)};
    width: ${props => (props.width ? `${props.width}px` : null)};
    }
  & svg & path {
      fill:${props => (props.color ? `${props.color}` :   null)};
  }    
    &:hover {
      path {
        fill: black;
      }
    }     
    
`;

