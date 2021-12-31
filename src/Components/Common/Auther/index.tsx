import React from 'react';
import {Wrapper, AuthorImg, AuthorName} from "./Author.style";

interface AuthorProps {
    authorImg: string;
    authorName : string;
}
const Author: React.FC<AuthorProps> = ({authorImg, authorName,
                                                       ...props}) => {
    return (
        <Wrapper>
            <AuthorImg>
                <img src={authorImg}/>
            </AuthorImg>
            <AuthorName>
                <p>{authorName}</p>
            </AuthorName>
        </Wrapper>
    )};

export default Author;
