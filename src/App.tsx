import Header from './Components/Common/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './Views/Home'
import { ThemeProvider } from 'styled-components';
import { Toggle } from './Utils/Theme/Toggle';
import { useDarkMode } from './Utils/Theme/Styles/useDarkMode';
import { GlobalStyles,  } from './Utils/Theme/Styles/globalStyle';
import { lightTheme, darkTheme} from './Utils/Theme/theme'
import './App.css';
import{themeToggle} from '././Utils/Theme/Toggle'
import SearchResult from './Views/SearchResult/index'
const App :React.FC  = () => {
   const [ theme , toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
 
  return (
    <ThemeProvider theme={themeMode}>
       <GlobalStyles />
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:keyword' element={<SearchResult/>}/>
        <Route path='/photo/:id' element={<></>}/>
      </Routes>
    </ThemeProvider>
  );
}
export default App;