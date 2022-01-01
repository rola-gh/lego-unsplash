import { ChoicesWrapper } from "../search.style";

export interface IChoice {
  query?: string;
  priority?: number;
}
interface IProps {
  choices: IChoice[];
  handleClickChoice: Function;
}

export default function InputChoices({ choices, handleClickChoice }: IProps) {
  return (
    <>
      {choices?.length > 0 && (
        <ChoicesWrapper>
          {choices?.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                handleClickChoice(item.query);
              }}
            >
              {item.query}
            </button>
          ))}
        </ChoicesWrapper>
      )}
    </>
  );
}
