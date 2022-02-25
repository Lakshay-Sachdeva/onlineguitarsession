import styled from "styled-components";

export const About = () => {
  return (
    <Container>
      <Heading>About</Heading>
      <FlexBox>
        <TextBox>
          <p>
            Hello, This is Amit Saini and I have been teaching guitar since last
            10 years, and now I have thought of providing services to greater
            audience with help of online teaching solutions which are widely
            available nowadays.
          </p>
          <p>
            My Online Guitar Sessions are compiled with years of experience and
            knowledge, which will provide you the true learning experience.
          </p>
          <ul>
            <li>Hassel Free Session</li>
            <li>Free career and instrument advice</li>
            <li>Fast Support</li>
          </ul>
        </TextBox>
        <TextBox>
          <p>
            Profit making is not our priority that's why we provide a demo
            session without any subscription amount.
          </p>
          <p>
            To ensure the quality of teaching and learning we enroll maximum 15
            students to a teacher So that a teacher can work on technicalities
            with you.
          </p>
          <p>
            In this way it is easier to maintain the quality of learning guitar.
          </p>
        </TextBox>
      </FlexBox>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  text-align: center;
  margin: 100px auto;
  border: 1px solid blue;
  padding: 10px;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: Jost, sans-serif;
  line-height: 38px;
  color: #37517e;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 90px;
    height: 1px;
    background: #ddd;
    bottom: 1px;
    left: calc(50% - 45px);
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: #47b2e4;
    bottom: 0;
    left: calc(50% - 20px);
  }
`;

const FlexBox = styled.div`
  display: flex;
  margin: 40px 40px 60px;
`;

const TextBox = styled.div`
  width: 50%;
  padding: 8px;
  text-align: left;
`;
