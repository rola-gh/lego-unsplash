import * as React from "react";
import { ReactNode } from 'react'
import { Wrapper } from './IconButton.style'

interface IconProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}

const Icon:React.FC <IconProps> = ({onClick, children})=> {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    )}
export default Icon;


