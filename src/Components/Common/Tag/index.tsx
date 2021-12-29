import React from "react";
import { TagContainer, Tag } from "./Tag.style";

export interface ITag {
  color?: string;
  backgroundColor?: string;
  image?: string;
  icon?: JSX.Element;
}

const index: React.FC<ITag> = (props) => {
  return (
    <TagContainer>
      {props.image && <img src={props.image} alt=""/>}
      {props.icon && props.icon}
      <Tag>{props.children}</Tag>
    </TagContainer>
  );
};

export default index;
