import React, { useState, useRef, useEffect } from 'react';
import { ImgHeader, Left, DownloadWrap, DownloadBtn, Dropbtn, DropIcon, HeaderList, Dropdown, LikeBtn, LikeIcon, ContentItem, DropContent } from './styles'


function ImageHeader() {
    const [like, setLike] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const addLike = () => {
        setLike(!like)
    };

    const openDropdown = () => {
        setDropdown(!dropdown)
    };

    const checkIfClickedOutside = (e: MouseEvent) => {
    if (
      null !== ref.current &&
      null !== e.target &&
      ref.current.contains(e.target as any)
    ) {
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
      document.addEventListener("mousedown", checkIfClickedOutside);
      return () => document.removeEventListener("mousedown", checkIfClickedOutside)
  }, [])


    return (
        <ImgHeader>
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
                    <DownloadBtn>Download free</DownloadBtn>
                </DownloadWrap>
                <Dropdown>
                    <Dropbtn onClick={openDropdown}>
                        <DropIcon width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M9.9 11.5l6.1 6.1 6.1-6.1 1.9 1.9-8 8-8-8 1.9-1.9z"></path></DropIcon>
                    </Dropbtn>
                    <DropContent dropdown={dropdown}>
                        <ContentItem>
                            Small
                            <span> (640x800)</span>
                        </ContentItem>
                        <ContentItem>
                            Medium
                            <span> (1920x2400)</span>
                        </ContentItem>
                        <ContentItem>
                            Large
                            <span> (2400x3000)</span>
                        </ContentItem>
                        <ContentItem>
                            Orginal Size
                            <span> (2400x3000)</span>
                        </ContentItem>
                    </DropContent>
                </Dropdown>
                
            </HeaderList>
        </ImgHeader>
    )
}

export default ImageHeader
