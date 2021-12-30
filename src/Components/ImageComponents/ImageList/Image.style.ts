import styled from 'styled-components'
export const Container = styled.div` 
background-color:blue;
    /* margin: auto;
    width: 90%;
    height: auto;
    display: flex;
    flex-flow: row;
    align-items: center; */
     /* flex-wrap: wrap; */
     display:grid; 
    /* grid-template-columns: repeat(3, 12px);
grid-template-rows: repeat(3, auto); */
/* gap:5px; */
`
export const Col = styled.div`
 /* background-color:pink
  width: 98%;
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    flex: 25%;
    align-items: center;
    margin-bottom: auto; */
    display:grid; 
    grid-template-columns: 2rem 4rem 2rem;
/* grid-template-rows: 300px 300px 12px; */
` 
 export const Img = styled.img``