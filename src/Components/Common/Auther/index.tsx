import React from 'react';
import {Wrapper, AuthorImg, AuthorName} from "./Author.style";

interface AuthorProps {
    authorImg: string;
    authorName : string;
}
const Author: React.FC<AuthorProps> = ({authorImg, authorName}) => {
    return (
        <Wrapper>
            <AuthorImg>
                <img src={authorImg} alt={authorName}/>
            </AuthorImg>
            <AuthorName>
                <p>{authorName}</p>
            </AuthorName>
        </Wrapper>
    )};

export default Author;
