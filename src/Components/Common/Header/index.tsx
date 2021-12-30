import { Header } from "./Header.style";
import { Link } from "react-router-dom";
import { Logo } from "../../../Assets/Icons";
import { useState } from "react";
import SearchInput from "../../Search/searchInput";

const Index = () => {
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
      {/* Theme Switch */}
    </Header>
  );
};

export default Index;
