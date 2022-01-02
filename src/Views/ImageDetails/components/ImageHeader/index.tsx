import React, { useState, useRef, useEffect } from 'react';
import { IPhoto } from '../../../../@Types/photo';
import Author from '../../../../Components/Common/Auther';
import { ImgHeader, Left, DownloadWrap, DownloadBtn, Dropbtn, DropIcon, HeaderList, Dropdown, LikeBtn, LikeIcon, ContentItem, DropContent } from './styles'


function ImageHeader({image}:{image: IPhoto}) {
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
            {
                image && 
                <Left>
                    <Author authorImg={image?.user?.profile_image?.small} authorName={image?.user?.name}/>
                </Left>
            }
            <HeaderList>
                <LikeBtn type="button" title="Like photo" onClick={()=>addLike()}>
                    <LikeIcon like={like} width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path></LikeIcon>
                </LikeBtn>
                <DownloadWrap>
                    <DownloadBtn target={'_blank'} href={image?.urls?.raw}>Download free</DownloadBtn>
                </DownloadWrap>
                <Dropdown>
                    <Dropbtn onClick={openDropdown}>
                        <DropIcon width="32" height="32" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M9.9 11.5l6.1 6.1 6.1-6.1 1.9 1.9-8 8-8-8 1.9-1.9z"></path></DropIcon>
                    </Dropbtn>
                    <DropContent dropdown={dropdown} ref={ref}>
                        <ContentItem target={'_blank'} href={image?.urls?.small}>
                            Small
                            <span> (640x800)</span>
                        </ContentItem>
                        <ContentItem target={'_blank'} href={image?.urls?.regular}>
                            Medium
                            <span> (1920x2400)</span>
                        </ContentItem>
                        <ContentItem target={'_blank'} href={image?.urls?.full}>
                            Large
                            <span> (2400x3000)</span>
                        </ContentItem>
                        <ContentItem target={'_blank'} href={image?.urls?.raw}>
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
