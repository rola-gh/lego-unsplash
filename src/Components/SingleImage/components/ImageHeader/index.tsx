import React, { useState, useRef, useEffect } from 'react';
import { ImgHeader, Left, DownloadWrap, DownloadBtn, DownloadLink, Dropbtn, DropIcon, HeaderList, Dropdown, LikeBtn, LikeIcon, ContentItem, DropContent, ItemSpan,} from './styles'

export interface IDownload {
    download:{
        links: {
        download: string,
    },
        width: number,
        height: number
    }   
}

function ImageHeader({download}:IDownload): JSX.Element {
    const {links, width, height} = download;
    const thelinks ={...links};
    const [like, setLike] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent) => {
            if (dropdown && ref.current && !ref.current.contains(e.target as any)) {
                setDropdown(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [dropdown])

    const addLike = () => {
        setLike(!like)
    };

    const openDropdown = () => {
        setDropdown(!dropdown);
    };
    
    return (
        <ImgHeader ref={ref}>
            <Left>
                <div className="logo">
                    Media object
                </div>
            </Left>
            <HeaderList>
                <LikeBtn type="button" title="Like photo" onClick={()=>addLike()}>
                    <LikeIcon like={like} width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></LikeIcon>
                </LikeBtn>
                <DownloadWrap>
                    <DownloadBtn>
                        <DownloadLink href={`${thelinks.download};force=true`} download title="Download photo">Download free</DownloadLink>
                    </DownloadBtn>
                </DownloadWrap>
                <Dropdown>
                    <Dropbtn onClick={openDropdown}>
                        <DropIcon width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M9.9 11.5l6.1 6.1 6.1-6.1 1.9 1.9-8 8-8-8 1.9-1.9z"></path></DropIcon>
                    </Dropbtn>
                    <DropContent dropdown={dropdown}>
                        <ContentItem href={`${thelinks.download};force=true&w=640`} download title="Download Small Photo">
                            Small
                            <ItemSpan> (640x{9*640/16})</ItemSpan>
                        </ContentItem>
                        <ContentItem href={`${thelinks.download};force=true&w=1920`} download title="Download Medium Photo">
                            Medium
                            <ItemSpan> (1920x{9*1920/16})</ItemSpan>
                        </ContentItem>
                        <ContentItem href={`${thelinks.download};force=true&w=2400`} download title="Download Large Photo">
                            Large
                            <ItemSpan> (2400x{9*2400/16})</ItemSpan>
                        </ContentItem>
                        <ContentItem href={`${thelinks.download};force=true`} download title="Download Orginal Size Photo">
                            Orginal Size
                            <ItemSpan> ({`${width}x${height}`})</ItemSpan>
                        </ContentItem>
                    </DropContent>
                </Dropdown>
                
            </HeaderList>
        </ImgHeader>
    )
}

export default ImageHeader
