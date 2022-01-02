import SearchInput from "../../Search/searchInput";
import { Container } from "./SearchContainer.style";

const Index = ({imageUrl}:{imageUrl: string}) => {
  return (
    <Container imageUrl={imageUrl} >
      <div>
        <span>Unsplash</span>
        <h1>The internet’s source of freely-usable images.</h1>
        <p>Powered by creators everywhere.</p>
        <SearchInput borderRadius={false} />
      </div>
    </Container>
  );
};

export default Index;
