import { MouseEventHandler } from "react";


const NextButton = ({onClick}:{onClick: MouseEventHandler}) => {
  return (
    <button type="button" title="scroll list to the right" onClick={onClick}>
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
  );
};

export default NextButton;
