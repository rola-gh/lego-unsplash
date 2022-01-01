import { Img ,P,Wrong} from './NotFound.style'
import { Logo } from '../../Assets/Icons'
export default function NotFound() {

  return (
    <>
      <Img src="https://unsplash.com/a/img/empty-states/photos.png" alt="not found" />
      <Wrong>
        <Logo />
      </Wrong>
       <P> Loading, Take a moment please ...  </P>
    </>
  )
}
