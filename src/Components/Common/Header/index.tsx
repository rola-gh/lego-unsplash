import { Header } from "./Header.style";
import { Link } from "react-router-dom";
import { Logo } from "../../../Assets/Icons";
import { useState } from "react";
import SearchInput from "../../Search/searchInput";

const Index = () => {
  return (
    <Header>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <SearchInput borderRadius={true} />
      </div>
      {/* Theme Switch */}
    </Header>
  );
};

export default Index;
