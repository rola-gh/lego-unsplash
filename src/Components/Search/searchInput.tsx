import { memo, useRef, useState } from "react";
import Icon from "./SearchIcon";
import InputChoices from "./inputChoices";
import { BoxDown, StyledAutoComplete, Wrapper } from "./search.style";
import SearchDefaultBox from "./SearchDefaultBox";
import CloseIcon from "./CloseIcon";

const staticData = {
  searches: ["one", "two", "three", "four", "five"],
  topics: ["one", "two", "three", "four", "five"],
  collections: ["one", "two", "three", "four", "five"],
};

interface IProps {
  data: string[];
  value: string;
  onChange: Function;
  name: string;
  placeholder?: string;
  borderRadius?: boolean;
}

function SearchInput({
  data,
  onChange,
  value,
  placeholder,
  name,
  borderRadius,
}: IProps) {
  const [state, setstate] = useState<string>(value);
  const [openChoices, setOpenChoices] = useState<boolean>(false);
  const [choices, setChoices] = useState<string[]>([...data]);

  const ref = useRef<HTMLDivElement>(null);

  // used to change the value of the input with the value that you have clicked on
  const handleClickChoice = (item: string) => {
    setstate(item);
    setOpenChoices(false);
  };

  // used to filter choices and show them into choices box
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setstate(e.target.value);
    setChoices(data.filter((item) => item.includes(e.target.value)));
    onChange(e.target.value);
  };

  const handleFocusInput = () => {
    setOpenChoices(true);
  };

  // this function used to handle click out of the input box
  const checkIfClickedOutside = (e: MouseEvent) => {
    if (
      null !== ref.current &&
      null !== e.target &&
      ref.current.contains(e.target as any)
    ) {
    } else {
      setOpenChoices(false);
    }
  };

  document.addEventListener("mousedown", checkIfClickedOutside);

  return (
    <Wrapper ref={ref} borderRadius={borderRadius}>
      <Icon />
      <StyledAutoComplete
        onChange={handleChangeInput}
        value={state}
        placeholder={placeholder}
        onFocus={handleFocusInput}
        name={name}
        borderRadius={borderRadius}
      />
      {state && <CloseIcon onClick={() => setstate("")} />}
      <BoxDown openChoices={openChoices}>
        {state ? (
          <InputChoices
            choices={choices}
            handleClickChoice={handleClickChoice}
          />
        ) : (
          <SearchDefaultBox
            searches={staticData.searches}
            topics={staticData.topics}
            collections={staticData.collections}
            handleClickChoice={handleClickChoice}
          />
        )}
      </BoxDown>
    </Wrapper>
  );
}

export default memo(SearchInput);

// Demo Of using Component

// const [inputChange, setInputChange] = useState<string>("");
// const handleChange = (text: string) => {
//   setInputChange(text);
// };

{
  /* <SearchInput
placeholder="Auto Complete"
onChange={handleChange}
value={inputChange}
name="autoComplete"
data={["one", "two", "three", "four"]}
/> */
}

{
  /* <SearchInput
placeholder="Auto Complete"
onChange={handleChange}
value={inputChange}
name="autoComplete"
borderRadius={true}
data={["one", "two", "three", "four"]}
/> */
}
