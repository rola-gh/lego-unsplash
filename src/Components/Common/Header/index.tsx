import { Header } from "./Header.style";
import { Link } from "react-router-dom";
import { Logo } from "../../../Assets/Icons";
import { useState } from "react";
import SearchInput from "../../Search/searchInput";
// import { Toggle } from "../../../Utils/Theme/styles/toggle";
// import { useDarkMode } from "../../../Utils/Theme/styles/useDarkMode";


const Index = () => {
  // const [ theme , toggleTheme ] = useDarkMode();
  const [inputChange, setInputChange] = useState<string>("");
  const handleChange = (text: string) => {
    setInputChange(text);
  };

  return (
    <Header>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <SearchInput
            placeholder="Search free high-resolution photos"
            onChange={handleChange}
            value={inputChange}
            name="autoComplete"
            borderRadius={true}
            data={["one", "two", "three", "four"]}
        />
      </div>
      {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
      {/* Theme Switch */}
    </Header>
  );
};

export default Index;
