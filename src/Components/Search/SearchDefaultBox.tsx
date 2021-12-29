import { SearchBox } from "./search.style";

interface IProps {
  recent?: string[];
  searches: string[];
  topics: string[];
  collections: string[];
}

export default function SearchDefaultBox({
  recent,
  searches,
  topics,
  collections,
}: IProps) {
  return (
    <SearchBox>
      {recent && (
        <div>
          <span>Recent Searches</span>.<button>Clear</button>
          <ul>
            {recent.map((item) => (
              <span>item</span>
            ))}
          </ul>
        </div>
      )}
      <span>Trending Searches</span>
      <ul>
        {searches.map((item) => (
          <span>item</span>
        ))}
      </ul>
      <span>Trending Topics</span>
      <ul>
        {topics.map((item) => (
          <span>item</span>
        ))}
      </ul>
      <span>Trending Collections</span>
      <ul>
        {collections.map((item) => (
          <span>item</span>
        ))}
      </ul>
    </SearchBox>
  );
}
