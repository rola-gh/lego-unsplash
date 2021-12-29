import { ChoicesWrapper } from "./search.style";

interface IProps {
  choices: string[];
  handleClickChoice: Function;
}

export default function InputChoices({ choices, handleClickChoice }: IProps) {
  return (
    <>
      {choices.length > 0 && (
        <ChoicesWrapper>
          {choices.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                handleClickChoice(item);
              }}
            >
              {item}
            </button>
          ))}
        </ChoicesWrapper>
      )}
    </>
  );
}
