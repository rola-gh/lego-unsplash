import { memo, useRef, useState } from "react";
import Icon from "./SearchIcon";
import InputChoices from "./inputChoices";
import { BoxDown, StyledAutoComplete, Wrapper } from "./search.style";
import SearchDefaultBox from "./SearchDefaultBox";
import CloseIcon from "./CloseIcon";
import { useNavigate } from "react-router";
import { IChoice } from "./inputChoices";

interface IProps {
  borderRadius?: boolean;
}

function SearchInput({ borderRadius }: IProps) {
  const [state, setstate] = useState<string>("");
  const [openChoices, setOpenChoices] = useState<boolean>(false);
  const [choices, setChoices] = useState<IChoice[]>([]);

  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // used to change the value of the input with the value that you have clicked on
  const handleClickChoice = (item: string) => {
    setstate(item);
    setOpenChoices(false);
  };

  // used to get choices from API and show them into choices box
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setstate(e.target.value);
    fetch(`https://unsplash.com/nautocomplete/${e.target.value}`)
      .then((res) => res.json())
      .then(({ autocomplete }) => {
        setChoices(autocomplete);
      });
  };

  // used To Open choices box when focus on the input
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

  // handle sybmit navigate you to serch page with the keyworn in params
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/photos/${state}`);
    setOpenChoices(false);
  };

  return (
    <Wrapper ref={ref} borderRadius={borderRadius}>
      <form onSubmit={handleSubmit}>
        <Icon />
        <StyledAutoComplete
          autoComplete="off"
          onChange={handleChangeInput}
          value={state}
          placeholder="Search free high-resolution photos"
          onFocus={handleFocusInput}
          name="autoComplete"
          borderRadius={borderRadius}
        />
        {state && <CloseIcon onClick={() => setstate("")} />}
      </form>
      {state ? (
        <BoxDown openChoices={choices.length !== 0 && openChoices}>
          <InputChoices
            choices={choices}
            handleClickChoice={handleClickChoice}
          />
        </BoxDown>
      ) : (
        <BoxDown openChoices={openChoices}>
          <SearchDefaultBox handleClickChoice={handleClickChoice} />
        </BoxDown>
      )}
    </Wrapper>
  );
}

export default memo(SearchInput);
