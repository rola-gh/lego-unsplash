import React from "react";
import { Header } from "./Header.style";
import { Link } from "react-router-dom";
import { Logo } from "../../../Assets/Icons";
import SearchInput from "../../Search/searchInput";
import { Toggle } from '../../../Utils/Theme/Toggle';

interface themeProp {
  theme: string;
  toggleTheme: () => void;
}

const Index: React.FC<themeProp> = ({ toggleTheme, theme }) => {
  return (
    <Header>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <SearchInput borderRadius={true} />
      </div>
      {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
      {/* Theme Switch */}
     <Toggle theme={theme} toggleTheme={toggleTheme}  />
    </Header>
  );
};

export default Index;
