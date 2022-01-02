import React from 'react';
import {Wrapper, AuthorImg, AuthorName} from "./Author.style";

interface AuthorProps {
    authorImg: string;
    authorName : string;
    color?:string
}
const Author: React.FC<AuthorProps> = ({authorImg, authorName, color}) => {
    return (
        <Wrapper>
            <AuthorImg>
                <img src={authorImg} alt={authorName}/>
            </AuthorImg>
            <AuthorName style={{color: color}}>
                {authorName}
            </AuthorName>
        </Wrapper>
    )};

export default Author;
