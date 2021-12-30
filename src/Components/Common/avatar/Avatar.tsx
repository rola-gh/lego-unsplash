import {Img,Container,Title} from './avatar.style'
const Avatar = (prop:any) => {
  return(
   <Container> 
      <Img src={prop.src} alt="unsplash" />
      <Title> { prop.title}</Title>
    </Container>
  )
}
export default Avatar