import Tag, { ITag } from "../Tag";
import {
  Slider,
  SliderContainer,
  NextControl,
  PrevControl,
  TagsContainer,
} from "./TagsSlider.style";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import {useCallback, useEffect, useMemo, useRef } from "react";

interface ISlider {
  tags: ITag[];
}

const Index: React.FC<ISlider> = ({ tags }) => {
  const TagsRef = useRef<HTMLDivElement>(null);

  const handleForwardBtnClick = useCallback(() => {
    const div = TagsRef.current;
    //@ts-ignore
    if(div){
      div.scrollLeft += 200;
    }
  }, []);
  
  const handleBackwardBtnClick = useCallback(() => {
    const div = TagsRef.current;
    if(div){
      div.scrollLeft -= 200;
    }
  }, []);

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <SliderContainer>
        <Slider>
          {
            tags.length > 4 && 
            <>
                  <NextControl>
                    <NextButton onClick={handleForwardBtnClick} />
                  </NextControl>
              
                  <PrevControl>
                    <PrevButton onClick={handleBackwardBtnClick} />
                  </PrevControl>
            </>
          }
          <TagsContainer ref={TagsRef}>
            {tags.map((tag) => (
              <Tag
                text={tag.text}
                key={tag.text}
                style={{
                  backgroundColor: "#fff",
                  color: "#767676",
                  border: "1px solid #d1d1d1",
                  width:'145px',
                  overflow: 'hidden',
                  justifyContent:'center',
                }}
              >
                {tag.text}
              </Tag>
            ))}
          </TagsContainer>
        </Slider>
      </SliderContainer>
    </div>
  );
};

export default Index;
