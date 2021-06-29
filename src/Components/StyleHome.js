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
    5% {
      margin-top: -180px;
    }
    15% {
      margin-top: -120px;
    }
    25% {
      margin-top: -90px;
    }
    50% {
      margin-top: 0px;
    }
    75% {
      margin-top: 90px;
    }
    100% {
      margin-top: 90px;
    }
  }
`;

export default StyleHome;
