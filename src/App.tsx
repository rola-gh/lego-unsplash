import React, { useCallback, useState } from "react";
import Header from "./Components/Common/Header";
import ErrorBoundry from "./Components/Common/ErrorBoundry";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Utils/Theme/theme";
import { GlobalStyles } from "./Utils/Theme/styles/globalStyle";

const Home = React.lazy(() => import("./Views/Home"));
const ImageDetails = React.lazy(() => import("./Views/ImageDetails"));
const SearchResult = React.lazy(() => import("./Views/SearchResult"));

function App() {
  const [theme, setTheme] = useState<string>("");
  const toggleTheme = useCallback(
    () => (theme === "dark" ? setTheme("light") : setTheme("dark")),
    [theme]
  );

  return (
    <React.Suspense fallback={<>Loading...</>}>
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
