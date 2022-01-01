import { useDispatch, useSelector } from "react-redux";
import { searchClearRecent } from "../../../Redux/SearchPhotos/Actions";
import { AppState } from "../../../Redux/store";
import Tag from "../../Common/Tag";
import { SearchBox } from "../search.style";

interface IProps {
  handleClickChoice: Function;
}

const staticData = {
  searches: [
    "wallpaper",
    "wather",
    "merry christmas",
    "2022",
    "creativity, project, game, apps, paintings",
  ],
  topics: [
    "Food & Drink",
    "Travel",
    "Arts & Culture",
    "Animals",
    "Experimental",
  ],
  collections: [
    "Work from Anywhere",
    "Food and Drink for Winter",
    "health",
    "Coronavirus COVID-19 pandemic",
    "food + food photography & styling",
  ],
};

export default function SearchDefaultBox({ handleClickChoice }: IProps) {
  const dispatch = useDispatch();

  // get the recent search from redux
  const {
    SearchPhotos: { recent },
  } = useSelector((state: AppState): AppState => state);

  return (
    <SearchBox>
      {recent?.length !== 0 && (
        <div>
          <span>Recent Searches</span> .{" "}
          <button onClick={() => dispatch(searchClearRecent())}>Clear</button>
          <ul>
            {recent?.map((item) => (
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
          {staticData.searches.map((item) => (
            <li key={item} onClick={() => handleClickChoice(item)}>
              <Tag
                text={item}
                style={{
                  border: "1px solid #d1d1d1",
                  backgroundColor: "#fff",
                  color: "#767676",
                }}
              >
                {item}
              </Tag>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span>Trending Topics</span>
        <ul>
          {staticData.topics.map((item) => (
            <li key={item} onClick={() => handleClickChoice(item)}>
              <Tag
                text={item}
                style={{
                  border: "1px solid #d1d1d1",
                  backgroundColor: "#fff",
                  color: "#767676",
                }}
              >
                {item}
              </Tag>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span>Trending Collections</span>
        <ul>
          {staticData.collections.map((item) => (
            <li key={item} onClick={() => handleClickChoice(item)}>
              <Tag
                text={item}
                style={{
                  border: "1px solid #d1d1d1",
                  backgroundColor: "#fff",
                  color: "#767676",
                }}
              >
                {item}
              </Tag>
            </li>
          ))}
        </ul>
      </div>
    </SearchBox>
  );
}
