import { MouseEventHandler } from "react"

const PrevButton = ({onClick}:{onClick: MouseEventHandler}) => {
    return (
        <button type="button" title="scroll list to the right" onClick={onClick}>
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
    )
}

export default PrevButton
