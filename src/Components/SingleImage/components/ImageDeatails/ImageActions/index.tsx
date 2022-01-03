import {ImgActions, ActionItem, ActionTitle, ActionValue} from "./styles";

export interface IActions {
  actions: {
    downloads: number,
    views: number,
    likes: number
  }
}

function ImageActions({actions}: IActions): JSX.Element{

  const {downloads, views, likes} = actions;
  return (
    <ImgActions>

        <ActionItem>
          <ActionTitle>Views</ActionTitle>
          <ActionValue>{views?.toLocaleString()}</ActionValue>
        </ActionItem>

        <ActionItem>
          <ActionTitle>Downloads</ActionTitle>
          <ActionValue>{downloads?.toLocaleString()}</ActionValue>
        </ActionItem>

        <ActionItem>
          <ActionTitle>Likes</ActionTitle>
          <ActionValue>{likes?.toLocaleString()}</ActionValue>
        </ActionItem>
        
    </ImgActions>
  )
}

export default ImageActions
