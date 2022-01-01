import Header from './Components/Common/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './Views/Home'
import './App.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Utils/Theme/Styles/globalStyle';
import { lightTheme, darkTheme} from './Utils/Theme/theme'
import './App.css';
import SearchResult from './Views/SearchResult/index'
function App() {
    const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div className="App">
    <ThemeProvider  theme={theme === 'light' ? lightTheme : darkTheme} >
        <Header  toggleTheme={ toggleTheme} theme = {theme}   />
          <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:keyword' element={<SearchResult/>}/>
        <Route path='/photo/:id' element={<></>}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;