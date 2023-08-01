import styled from "styled-components";

export const CountryData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: ${(props) => (props.theme === "light" ? "" : "#FFF")};

  img {
    width: 440px;
    height: 300px;
  }

  .data--area {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      margin: 0px;
    }

    .data--firstArea {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 20px;

      p {
        margin: 5px;
        span {
          font-weight: bold;
        }
      }

      .language {
        font-weight: normal;
        margin-right: 5px;
      }
    }

    .border--area {
      margin-top: 20px;
      p {
        font-weight: bold;
      }

      .borders {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 5px;
        width: 100%;

        a {
          color: ${(props) => (props.theme === "light" ? "#000" : "#FFF")};
          display: flex;
          min-height: 25px;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 13px;
          flex: 1;
          font-weight: 300;
          box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`;
