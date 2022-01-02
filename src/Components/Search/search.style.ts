import styled from "styled-components";

interface IStyledWrapper {
  borderRadius?: boolean;
}

export const Wrapper = styled.div<IStyledWrapper>`
  width: 100%;
  position: relative;
  & form > Button {
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
  transition: all 0.1s;
  width: 100%;
  padding: 10px 40px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) =>
    props.theme.body === "#ffffff" ? "#eeeeee" : "#555555"};
  border: ${(props) =>
    props.borderRadius ? "none;margin:1px" : "2px solid #d1d1d1;"};
  border-radius: ${(props) =>
    props.borderRadius ? "24px;height: 40x;" : "4px;height: 54px;"};
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.body};

    box-shadow: ${(props) =>
      props.borderRadius ? ";border:1px solid #d1d1d1;" : "0 0 0 5px #0003;"};
  }
`;

interface IBoxWrapperProps {
  openChoices: boolean;
}

export const BoxDown = styled.div<IBoxWrapperProps>`
  display: ${(props) => (props.openChoices ? "block" : "none")};
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  position: absolute;
  top: calc(100% + 8px);
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: 0 2px 4px ${(props) => props.theme.body}1f;
  padding-top: 8px;
  padding-bottom: 8px;
  z-index: 1;
  color: #000;

  & button {
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
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
    color: ${(props) => props.theme.text};
    &:hover {
      /* background-color: #f1f1f1; */
      background-color: ${(props) =>
        props.theme.body === "#ffffff" ? "#f1f1f1" : "#222222"};
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
    display: flex;
    flex-wrap: wrap;
  }

  & ul li {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;
