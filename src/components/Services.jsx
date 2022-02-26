import styled from "styled-components";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const data = [
    [
      "",
      "Economic Guitar Sessions",
      "Upto 50% less price than other platforms.",
    ],
    [
      "",
      "Theoretical and Practical Aspects",
      "theory is as important as practicality for the Artisit itself.",
    ],
    [
      "",
      "Timely Sessions",
      "99.99% there will not be any discripencies in class timings.",
    ],
    [
      "",
      "A Planned Curriculum",
      "As said before it's the key to right education.",
    ],
  ];
  return (
    <>
      <Heading>SERVICES</Heading>
      <Container>
        {data.map((el) => (
          <ServiceCard icon={el[0]} heading={el[1]} details={el[2]} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2.5%;
  margin: 50px auto;
  justify-content: center;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-size: 32px;
  font-weight: 900;
  font-family: Jost, sans-serif;
  line-height: 38px;
  color: #37517e;
`;
