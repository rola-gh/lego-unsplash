import React from 'react';

interface AuthorProps {
    authorImg: string;
    authorName : string;
    authorAvailable:string;
}
const Author: React.FC<AuthorProps> = ({authorImg, authorName, authorAvailable,
                                                       ...props}) => {
    return (
        <div>
            <div>
                <img src={authorImg}/>
            </div>
            <div>
                <h5>{authorName}</h5>
                {/*<p>{authorAvailable}<span>T</span></p>*/}
            </div>
        </div>
    )};

export default Author;
