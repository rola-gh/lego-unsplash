import styled from 'styled-components';

let Sun:any, Moon:any;
Sun = Moon = styled.svg`

  position:absolute; 
  top:1rem; 

  `;
  
const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  font-size: 0.2rem;
  justify-content: space-evenly;
  padding: 0.3rem;
   left:20%;
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  border:none;
   align-items:center 

`;

export const Toggle:React.FC<themeToggle> = ({ theme, toggleTheme  }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      { theme === 'light' ? <Moon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="yellow" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></Moon>
      : 
      <Sun xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></Sun> }
    </ToggleContainer>
  )
}