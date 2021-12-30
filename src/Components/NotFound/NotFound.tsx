import { Img ,P,Wrong} from './NotFound.style'
// import { ReactComponent as Logo } from '../../Assets/Icons/logo.svg'

export default function NotFound() {

  return (
    <div>
      <Img src="https://unsplash.com/a/img/empty-states/photos.png" alt="not found" />
      <Wrong>
        {/* <Logo /> */}
 
      </Wrong>
       <P> some thing went wrong </P>
     
    </div>
  )
}
