import { useState } from 'react';
import SearchInput from '../../Search/searchInput';
import { Container } from './SearchContainer.style'

const Index = () => {
    const [inputChange, setInputChange] = useState<string>("");
    const handleChange = (text: string) => {
        setInputChange(text);
    };
    return (
        <Container imageUrl='https://images.unsplash.com/photo-1640102371408-5fc0c42a8792?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1000&amp;h=1000'>
            <div>
                <span>Unsplash</span>
                <h1>The internet’s source of freely-usable images.</h1>
                <p>Powered by creators everywhere.</p>
                <SearchInput
                    placeholder="Search free high-resolution photos"
                    onChange={handleChange}
                    value={inputChange}
                    name="autoComplete"
                    borderRadius={false}
                    data={["one", "two", "three", "four"]}
                />
            </div>
        </Container>
    )
}

export default Index
