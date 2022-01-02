import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Common/Header";
import ErrorBoundry from "./Components/Common/ErrorBoundry";
import SplashScreen from "./Components/Common/SplashScreen";
import "./App.css";
import { lightTheme, darkTheme } from "./Utils/Theme/theme";
import { GlobalStyles } from "./Utils/Theme/styles/globalStyle";

const Home = React.lazy(() => import("./Views/Home"));
const ImageDetails = React.lazy(() => import("./Views/ImageDetails"));
const SearchResult = React.lazy(() => import("./Views/SearchResult"));

function App() {
  const [theme, setTheme] = useState<string>("");

  const toggleTheme = useCallback(
    () => {
      if(theme === 'dark'){
        localStorage.setItem('theme', 'light');
        setTheme('light') 
      }else{
        localStorage.setItem('theme', 'dark');
        setTheme('dark') 
      }
    },[theme]
  );

  useEffect(() => {
    let theme_ = localStorage.getItem('theme');
    if(theme_){
      setTheme(theme_);
    }
  }, [])

  return (
    <React.Suspense fallback={<SplashScreen />}>
      <ErrorBoundry>
        <div className="App">
          <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <GlobalStyles {...(theme === "dark" ? darkTheme : lightTheme)} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:keyword" element={<SearchResult />} />
              <Route path="/photo/:id" element={<ImageDetails />} />
            </Routes>
          </ThemeProvider>
        </div>
      </ErrorBoundry>
    </React.Suspense>
  );
}

export default App;
