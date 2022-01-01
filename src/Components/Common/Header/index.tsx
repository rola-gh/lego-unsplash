import { Header } from "./Header.style";
import { Link } from "react-router-dom";
import { Logo } from "../../../Assets/Icons";
import SearchInput from "../../Search/searchInput";
import { Toggle } from '../../../Utils/Theme/Toggle';
import { FC } from "react";

const Index: FC<themeProp> = ({toggleTheme,theme }) => {
  return (
    <Header>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <SearchInput borderRadius={true} />
      </div>
      {/* Theme Switch */}
     <Toggle theme={theme} toggleTheme={toggleTheme}  />
    </Header>
  );
};

export default Index;
