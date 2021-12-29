import styled from "styled-components";

interface IStyledWrapper {
  borderRadius?: boolean;
}

export const Wrapper = styled.div<IStyledWrapper>`
  width: 100%;
  position: relative;
  & > Button {
    background: none;
    border: none;
    position: absolute;
    top: ${(props) => (props.borderRadius ? "8px" : "13px")};
    cursor: pointer;
  }
  & .searchIcon {
    left: 10px;
  }
  & .closeIcon {
    right: 10px;
  }
`;

interface IStyledAutoComplete {
  borderRadius?: boolean;
}

export const StyledAutoComplete = styled.input<IStyledAutoComplete>`
  font-size: 1rem;
  border: 2px solid #d1d1d1;
  transition: all 0.4s;
  width: 100%;
  padding: 10px 40px;
  border-radius: ${(props) =>
    props.borderRadius ? "24px;height: 40x;" : "4px;height: 54px;"};
  &:focus {
    outline: none;
    box-shadow: ${(props) => (props.borderRadius ? ";" : "0 0 0 5px #0003;")};
  }
`;

interface IBoxWrapperProps {
  openChoices: boolean;
}

export const BoxDown = styled.div<IBoxWrapperProps>`
  display: ${(props) => (props.openChoices ? "block" : "none")};
  flex-direction: column;
  width: calc(100% - 5px);
  margin: 4px auto;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: 0 2px 4px #0000001f;
  padding-top: 8px;
  padding-bottom: 8px;
  z-index: 1;
`;

export const ChoicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  & button {
    text-align: start;
    background: none;
    border: none;
    transition: all 0.1s;
    padding: 10px;
    margin-bottom: 1px;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

export const SearchBox = styled.div`
  flex-direction: column;
  margin: 5px auto;

  & > div {
    margin-bottom: 8px;
    padding: 8px 16px;
  }

  & ul {
    margin-top: 8px;
    margin-bottom: 8px;
    display: flex;
  }

  & ul li {
    margin-right: 8px;
  }
`;
