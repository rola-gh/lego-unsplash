import React from "react";
import {Link} from 'react-router-dom'
import { TagContainer, Tag } from "./Tag.style";

export interface ITag {
  color?: string;
  backgroundColor?: string;
  image?: string;
  icon?: JSX.Element;
  text?: string
}

const index: React.FC<ITag> = (props) => {
  return (
    <TagContainer>
        {props.image && <img src={props.image} alt=""/>}
        {props.icon && props.icon}
      <Link to={`/photos/${props.text}`}>
        <Tag>{props.children}</Tag>
      </Link>
    </TagContainer>
  );
};

export default index;
