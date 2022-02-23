import styled from "styled-components";

export const Introduction = () => {
  return (
    <Container>
      <Text>
        <h1>Introducing The Online Guitar Sessions</h1>
        <p>Interactive Sessions, no recorded video guaranteed</p>
        <Buttons>
          <Demo></Demo>
          <Chat></Chat>
          <WatchVideo></WatchVideo>
        </Buttons>
      </Text>
      <Img />
    </Container>
  );
};

const Container = styled.div`
  background-color: #37517e;
  height: 70vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: -10px;
  color: #f9f9f9;
  font-family: Jost, sans-serif;
`;

const Text = styled.div`
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

const Img = styled.img``;

const Buttons = styled.div``;

const Demo = styled.a``;

const Chat = styled.a``;

const WatchVideo = styled.a``;
