import {Wrapper } from './typography.style'
import '../../../App.css'
const variantMapping:any = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4:  "h4",
  h5: "h5",
  h6: "h6", 
  p:   "p"
}
export interface Prop {
  color: string, 
  children: string | JSX.Element|JSX.Element[] |undefined,
  variant?: string, 
  fontSize?:string| undefined
}
const Typography: React.FC<Prop> = ({ variant, children,color,fontSize }:Prop) => {
  const Component = variant ? variantMapping[variant] : "p"
  return ( 
    <Wrapper color = {color} fontSize = {`${fontSize}`}>
      <Component > {children} </Component>
    </Wrapper>

  )
}
export default Typography