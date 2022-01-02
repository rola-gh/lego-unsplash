import { CSSProperties } from 'react';
import { Wrapper } from './typography.style'

type variantMapping = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface Prop {
  color: string, 
  children: string | JSX.Element|JSX.Element[] |undefined,
  variant?: variantMapping, 
  fontSize?:string| undefined,
  style?: CSSProperties
}

const Typography: React.FC<Prop> = ({ variant, children,color,fontSize, style }:Prop) => {
  const Component = variant || "p"
  return ( 
    <Wrapper color = {color} fontSize = {`${fontSize}`}>
     <Component style={style}> {children} </Component>
    </Wrapper>

  )
}
export default Typography