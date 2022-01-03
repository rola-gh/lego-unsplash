import React from 'react';
import {ImgInfo, InfoItem, InfoIcon, InfoSpan, SpanHyperLink, SpanLink} from './styles';
import moment from 'moment';

export interface IInfo {
    info: {
        location: {name: string},
        exif: {name: string},
        created_at: Date
    }
}

function ImageInfo({info}: IInfo): JSX.Element{
    
    const {location, exif, created_at: publish} = info;
    const searchArr = location?.name?.replace(/ /g,'').split(",");

    return (
        <ImgInfo>
            {location?.name && <InfoItem>
                <InfoIcon width="16" height="16" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M16 2.66669C9.99998 2.66669 5.33331 7.06669 5.33331 12.6667C5.33331 19.8667 12.9333 27.0667 15.3333 29.0667C15.7333 29.4267 16.2666 29.4267 16.6666 29.0667C19.0666 27.0667 26.6666 19.8667 26.6666 12.6667C26.6666 7.06669 22 2.66669 16 2.66669ZM16 18.6667C13.0666 18.6667 10.6666 16.2667 10.6666 13.3334C10.6666 10.4 13.0666 8.00002 16 8.00002C18.9333 8.00002 21.3333 10.4 21.3333 13.3334C21.3333 16.2667 18.9333 18.6667 16 18.6667Z"></path></InfoIcon>
                <InfoSpan>&nbsp; <SpanLink to={`/search/${searchArr}`}>{location?.name}</SpanLink></InfoSpan>
            </InfoItem>}
            <InfoItem>
                <InfoIcon width="16" height="16" viewBox="0 0 24 24" version="1.1" aria-hidden="false"><path d="M21 6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14z"></path></InfoIcon>
                <InfoSpan>&nbsp; Published {moment(publish).fromNow()}</InfoSpan>
            </InfoItem>
            {exif?.name && <InfoItem>
                <InfoIcon width="16" height="16" viewBox="0 0 24 24" version="1.1" aria-hidden="false"><path d="M4 5h3l2-2h6l2 2h3c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Zm8 3c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3Z"></path></InfoIcon>
                <InfoSpan>&nbsp; {exif?.name}</InfoSpan>
            </InfoItem>}
            <InfoItem>
                <InfoIcon width="16" height="16" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M13.3333 18.9333l8.8-8.8L24 12 13.3333 22.6667 8 17.3333l1.86667-1.8666 3.46663 3.4666zM28 6.66668v8.00002c0 7.3333-5.0667 14.2666-12 16-6.93333-1.7334-12-8.6667-12-16V6.66668l12-5.33334 12 5.33334zm-2.6667 1.73333L16 4.26668 6.66667 8.40001v6.26669c0 6 4.00003 11.6 9.33333 13.2 5.3333-1.6 9.3333-7.2 9.3333-13.2V8.40001z"></path></InfoIcon>
                <InfoSpan>&nbsp; Free to use under the <SpanHyperLink href='https://unsplash.com/license'>Unsplash License</SpanHyperLink></InfoSpan>
            </InfoItem>
        </ImgInfo>
    )
}

export default ImageInfo;

