import {ImgActions, ActionItem, ActionTitle, ActionValue} from "./styles";

function ImageActions() {
    return (
      <ImgActions>

          <ActionItem>
            <ActionTitle>Views</ActionTitle>
            <ActionValue>5,683</ActionValue>
          </ActionItem>

          <ActionItem>
            <ActionTitle>Downloads</ActionTitle>
            <ActionValue>47</ActionValue>
          </ActionItem>

          <ActionItem>
            <ActionTitle>Featured in</ActionTitle>
            <ActionValue>Editorial, Nature</ActionValue>
          </ActionItem>
          
      </ImgActions>
    )
}

export default ImageActions
