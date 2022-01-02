import styled from 'styled-components';

export const ImgHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Left = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderList  = styled.ul`
    display: flex;
    align-items: center;
`;

export const LikeBtn  = styled.button`
    font-size: 14px;
    height: 32px;
    line-height: 30px;
    padding: 0 11px;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    color: #767676;
    &:hover {
        cursor: pointer;
    }
`;

export const LikeIcon  = styled.svg<{like: Boolean}>`
    position: relative;
    top: -1px;
    width: 15px;
    fill: ${props => props?.like ? 'red' : '#767676;'};
`;

export const DownloadWrap = styled.div`
    margin-left: 10px;
`;

export const DownloadBtn = styled.a`
    background-color: #3cb46e;
    color: white;
    font-size: 14px;
    padding: 6px;
    border: 1px solid #3cb46e;
    border-radius: 2px;
    cursor: pointer;
    transition: hover 0.5s;
    text-decoration: none;
    &:hover {
        background-color: #37a866;
    }
`
export const Dropdown = styled.div`
    position: relative;
    display: inline-block;

`

export const Dropbtn = styled(DownloadBtn)`
    border-left: 1px solid white;
    border-top-left-radius: unset;
`
export const DropIcon = styled.svg`
    width: 15px;
    height: 14px;
    fill: white;
`

export const DropContent = styled.div<{dropdown: Boolean}>`
    display: ${props => props?.dropdown ? 'block' : 'none'};;
    position: absolute;
    right: 0;
    top: 47px;
    background-color: rgb(17, 17, 17);
    white-space: nowrap;
    padding-bottom: 8px;
    padding-top: 8px;
    border-radius: 4px;
    box-shadow: 0 8px 16px #00000029;
    min-width: 135px;
    z-index: 1;
    color: #fff;
    text-align: right;
`
export const ContentItem = styled.a`
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    color: #fff;
    font-size: 14px;
    text-decoration: none;

    &:last-child {
        border-top: 1px solid #fff3;
    }
`

