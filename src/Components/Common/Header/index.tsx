import { Header } from "./Header.style";
import { Link } from "react-router-dom";
import { Logo } from "../../../Assets/Icons";
import SearchInput from "../../Search/searchInput";
// import { Toggle } from "../../../Utils/Theme/styles/toggle";
// import { useDarkMode } from "../../../Utils/Theme/styles/useDarkMode";

const Index = () => {
  // const [ theme , toggleTheme ] = useDarkMode();
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
    </Header>
  );
};

export default Index;
