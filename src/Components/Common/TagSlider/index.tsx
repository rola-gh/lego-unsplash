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
import { useCallback, useEffect, useRef } from "react";

interface ISlider {
  tags: ITag[];
}

const Index: React.FC<ISlider> = ({ tags }) => {

  const TagsRef = useRef(null);
  const handleForwardBtnClick = useCallback(() => {
    // updateActiveSlideIndex(getNextSlideIndex("forward"), "forward");
  }, []
  //[updateActiveSlideIndex, getNextSlideIndex]
  );

  const handleBackwardBtnClick = useCallback(() => {
    // updateActiveSlideIndex(getNextSlideIndex("backward"), "backward");
  }, []
  // [updateActiveSlideIndex, getNextSlideIndex]
  );


  useEffect(() => {
    console.log(TagsRef.current);
  }, [])

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <SliderContainer>
        <Slider>
          <NextControl>
            <NextButton onClick={handleForwardBtnClick} />
          </NextControl>
          <PrevControl>
            <PrevButton onClick={handleBackwardBtnClick} />
          </PrevControl>
          <TagsContainer ref={TagsRef}>
            {tags.map((tag) => (
              <Tag
                text={tag.text}
                key={tag.text}
                style={{
                  backgroundColor: "#fff",
                  color: "#ccc",
                  border: "1px solid #d1d1d1",
                  maxWidth:'145px',
                  overflow: 'hidden',
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
