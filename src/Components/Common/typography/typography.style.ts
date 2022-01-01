import styled from 'styled-components';

interface IProps{
  color: string
  fontSize?: string,
}

export const Wrapper = styled.div<IProps>`
  font-size: ${(props)=> props.fontSize ||"10px"};
  color:${(props) => props.color || "black" };
` 
