import styled from "styled-components";

export const Introduction = () => {
  return (
    <Container>
      <Text>
        <h1>Introducing The Online Guitar Sessions</h1>
        <p>Interactive Sessions, no recorded video guaranteed</p>
        <Buttons>
          <Demo>Book Demo Session</Demo>
          <Chat>
            <img src="/images/whatsapp.png" alt="chat" />
          </Chat>
          <WatchVideo>
            <img src="/images/playButton.svg" alt="watchVideo" />
            <span>Watch Video</span>
          </WatchVideo>
        </Buttons>
      </Text>
      <Img src="/images/hero-img.png" alt="hero image" />
    </Container>
  );
};

const Container = styled.div`
  background-color: #37517e;
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #f9f9f9;
  font-family: Jost, sans-serif;
  margin: -8px;
  padding-top: 38px;
`;

const Text = styled.div`
  text-wrap: wrap;
  width: 40%;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
  }
  p {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    opacity: 0.6;
  }
`;

const Img = styled.img`
  width: 30%;
  margin: 10px;
  object-fit: contain;
  animation: bounce 2s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.5, 0.05, 0.5, 0.5);
  animation-iteration-count: infinite;

  @keyframes bounce {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 50px, 0);
    }
  }
`;

const Buttons = styled.div`
  justify-content: space-evenly;
  margin: 10px 5px;
`;

const Demo = styled.a`
  text-decoration: none;
  color: #f9f9f9;
  border: 1px solid #47b2e4;
  background-color: #47b2e4;
  padding: 8px 16px;
  border-radius: 25px;
  margin: auto 10px;
  font-size: 16px;
  font-weight: 500;
  font-family: Jost, sans-serif;
  line-height: 24px;
`;

const Chat = styled.a`
  width: 16px;
  margin: auto 8px;
  margin: auto 10px;

  img {
    background: transparent;
    width: 4.5%;
    fill: #f9f9f9

    &:hover {
      fill: #47b2e4;
    }
  }
`;

const WatchVideo = styled.a`
  margin: auto 10px;
  img {
    width: 4%;
  }
  span {
    padding: 8px;
    font-weight: 400;
    font-family: OpenSans, sans-serif;
    font-size: 16px;
    line-height: 24px;
  }
`;
