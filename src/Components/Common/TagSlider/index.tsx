import  Tag  from "../Tag";
import {
  Slider,
  SliderContainer,
  NextControl,
  PrevControl,
  TagsContainer,
} from "./TagsSlider.style";

const index = () => {
  return (
    <div>
      <SliderContainer>
        <Slider>
          <NextControl>
            <button type="button" title="scroll list to the right">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z"></path>
              </svg>
            </button>
          </NextControl>
          <PrevControl>
            <button type="button" title="scroll list to the right">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M20.6667 24.6666l-2 2L8 16 18.6667 5.3333l2 2L12 16l8.6667 8.6666z"></path>
              </svg>
            </button>
          </PrevControl>
          <TagsContainer>
            <Tag>Nature</Tag>
            <Tag>Nature</Tag>
            <Tag>Nature</Tag>
            <Tag>Nature</Tag>
            <Tag>Nature</Tag>
            <Tag>Nature</Tag>
            <Tag>Nature</Tag>
            <Tag>Nature</Tag>
          </TagsContainer>
        </Slider>
      </SliderContainer>
    </div>
  );
};

export default index;
