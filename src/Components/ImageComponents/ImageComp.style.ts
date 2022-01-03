import styled from "styled-components";

export const Card = styled.div`
    margin: 4rem auto;
    position: relative;
    height: 100%;
    max-width: 25%;  
   
   :after {
   position:absolute;
   content: '';
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: transparent;
   }
   
   &:hover {
   :after {
       background-color: rgba(155,155,155,0.31);

   }
   }
`;
export const ImgCard = styled.img`
  height: 100%;
  width: 100%;
  display: block;
`;

export const CardWithHover = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
  height: 100%;
  top:0; 
  right:0; 
  left: 0;
  z-index: 44;
`;

export const FavIcon = styled.div`
  text-align: end;
  
`;

export const WrapperAuthorDownload = styled.div`
  display: flex;
  justify-content: space-between;
`;

