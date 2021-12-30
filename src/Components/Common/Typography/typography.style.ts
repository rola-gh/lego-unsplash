import styled from 'styled-components';
import { Prop } from './Typography';
 export const Wrapper = styled.div<Prop>`
  font-size: ${(props)=> props.fontSize||"10px"};
 color:${(props)=>props.color || "black" };
` 