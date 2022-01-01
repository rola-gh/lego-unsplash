import React from 'react';
import Header from './Components/Common/Header';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './Utils/Theme/styles/useDarkMode';
import { lightTheme, darkTheme} from './Utils/Theme/theme'

const Home = React.lazy(() => import('./Views/Home'))
const ImageDetails = React.lazy(() => import('./Views/ImageDetails'))
// const SearchResult = React.lazy(() => import('./Views/SearchResult'))

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <div className="App">
      <ThemeProvider theme={themeMode}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:keyword' element={<></>}/>
          <Route path='/photo/:id' element={<ImageDetails />}/>
        </Routes>
      </ThemeProvider>
      </div>
    </React.Suspense>
  );
}
export default App;