import styled from "styled-components";

const StyleHome = styled.div`
  #appear {
    height: 5.5rem;
    overflow: hidden;
  }

  #appear > div > div {
    margin-bottom: 30px;
    display: inline-block;
    color: white;
  }

  #appear div:first-child {
    animation: show 8.5s linear infinite;
  }

  @keyframes show {
    0% {
      margin-top: -360px;
    }
    100% {
      margin-top: 30px;
    }
  }
`;

export default StyleHome;
