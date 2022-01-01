import React from "react";

interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function CloseIcon({ onClick }: IProps) {
  return (
    <button className="closeIcon" type="button" onClick={onClick}>
      <svg
        width="25"
        height="25"
        className="ben48 VdNCI nT46U"
        viewBox="0 0 32 32"
        version="1.1"
        aria-hidden="false"
        fill="#888"
      >
        <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z"></path>
      </svg>
    </button>
  );
}
