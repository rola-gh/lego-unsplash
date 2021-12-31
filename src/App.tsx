import Header from './Components/Common/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './Views/Home'
import './App.css';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './Utils/Theme/styles/useDarkMode';
import { lightTheme, darkTheme} from './Utils/Theme/theme'

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <div className="App">
    <ThemeProvider theme={themeMode}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:keyword' element={<></>}/>
        <Route path='/photo/:id' element={<></>}/>
      </Routes>
    </ThemeProvider>
    </div>
  );
}
export default App;