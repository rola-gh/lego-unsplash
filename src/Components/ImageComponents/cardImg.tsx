import React, {useState} from 'react';
import {Card, ImgCard, CardWithHover, WrapperAuthorDownload, FavIcon} from './ImageComp.style';
import Author from "../Common/Auther";
import FavoriteIcon from './../Buttons/favorite'
import DownloadIcon from "../Buttons/download";
// import Photo from './../../Assets/Images/photoTst.jpg';
interface CardProps  {
    onClick?: () => void; //Link
    srcImg?:string;
    authorName:string;
    authorAvailable:string;
    authorImg:string;
    onMouseEnter?: () => void; //zoom
    onMouseLeave?: () => void; //zoom
    TagsComp? : JSX.Element;
}

const CardImg: React.FC<CardProps> = ({srcImg,onClick, TagsComp,onMouseEnter, onMouseLeave, authorName, authorAvailable, authorImg}) => {
    const [hover, setHover] = useState(false);

    return (
        <Card onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <ImgCard src={srcImg} alt='tst'/>
            {hover&&
            <CardWithHover>
                <FavIcon>
                     <FavoriteIcon color='#767676' height='15px' width='15px'/>
                </FavIcon>
                <WrapperAuthorDownload>
                    <Author authorName={authorName} authorAvailable={authorAvailable} authorImg={authorImg}/>
                    <DownloadIcon/>
                </WrapperAuthorDownload>
            </CardWithHover>
            }
            {/*TagsComp*/}
        </Card>
    );
};

export default CardImg