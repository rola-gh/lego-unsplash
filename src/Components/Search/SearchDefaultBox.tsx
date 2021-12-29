import Tag from "../Common/Tag";
import { SearchBox } from "./search.style";

interface IProps {
  recent?: string[];
  searches: string[];
  topics: string[];
  collections: string[];
  handleClickChoice: Function;
}

export default function SearchDefaultBox({
  recent,
  searches,
  topics,
  collections,
  handleClickChoice,
}: IProps) {
  return (
    <SearchBox>
      {recent && (
        <div>
          <span>Recent Searches</span>.<button>Clear</button>
          <ul>
            {recent.map((item) => (
              <li key={item} onClick={() => handleClickChoice(item)}>
                <Tag text={item}>{item}</Tag>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <span>Trending Searches</span>
        <ul>
          {searches.map((item) => (
            <li key={item} onClick={() => handleClickChoice(item)}>
              <Tag text={item}>{item}</Tag>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span>Trending Topics</span>
        <ul>
          {topics.map((item) => (
            <li key={item} onClick={() => handleClickChoice(item)}>
              <Tag text={item}>{item}</Tag>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span>Trending Collections</span>
        <ul>
          {collections.map((item) => (
            <li key={item} onClick={() => handleClickChoice(item)}>
              <Tag text={item}>{item}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </SearchBox>
  );
}
