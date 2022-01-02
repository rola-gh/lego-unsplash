import React from "react";
import Tag from "../../../../Components/Common/Tag";
import { SectionTitle, SectionBody } from "../../styles";

interface IProps {
  tags: string[];
}

const RelatedTags: React.FC<IProps> = ({ tags }) => {
  return (
    <div>
      {tags?.length > 0 && (
        <>
          <SectionTitle>Related Tags</SectionTitle>
          <SectionBody>
            {tags.map((tag) => (
              <Tag
                text={tag}
                key={tag}
                style={{
                  backgroundColor: "#ccc",
                  color: "#767676",
                  border: "1px solid #d1d1d1",
                  overflow: "hidden",
                  justifyContent: "center",
                }}
              >
                {tag}
              </Tag>
            ))}
          </SectionBody>
        </>
      )}
    </div>
  );
};

export default RelatedTags;
