import React from "react";
import { Link } from "react-router-dom";
import { TagContainer, Tag } from "./Tag.style";

export interface ITag{
  image?: string
  icon?: JSX.Element
  text?: string
  style?: React.CSSProperties
}

const index: React.FC<ITag> = (props) => {
  return (
    <TagContainer style={props.style || {}}>
      {props.image && <img src={props.image} alt="" />}
      {props.icon && props.icon}
      <Link to={`/photos/${props.text}`}>
        <Tag>{props.children}</Tag>
      </Link>
    </TagContainer>
  );
};

export default index;
