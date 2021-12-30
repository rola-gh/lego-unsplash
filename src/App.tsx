
// import './App.css';
import Typography from './Components/Common/typography/Typography'
import  Avatar from './Components/Common/avatar/Avatar'
import { ThemeProvider } from 'styled-components';
// import { defaultTheme } from './Utils/Theme/theme'
import { Toggle } from './Utils/Theme/styles/toggle';
import { useDarkMode } from './Utils/Theme/styles/useDarkMode';
import { GlobalStyles,  } from './Utils/Theme/styles/globalStyle';
import { lightTheme, darkTheme} from './Utils/Theme/theme'
function App() {
  const [ theme , toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    
     <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Avatar src="https://images.unsplash.com/photo-1640753138783-feb605ed090b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=100&q=60" title="eman" />
      <Typography variant="h2" color="pink" fontSize='15px'> Hello </Typography>
        <Typography variant="h4" color ="blue"  fontSize='15px'> Hello </Typography>

    </ThemeProvider>
     
  ); 
}

export default App;


