import styled from "styled-components";

export const ServiceCard = ({ icon, heading, details }) => {
  return (
    <Box>
      <Icon src={icon} />
      <Title>{heading}</Title>
      <Details>{details}</Details>
    </Box>
  );
};

const Box = styled.div`
  width: 20%;
  height: 250px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    transition: all ease-in-out 0.4s;
    transform: translateY(-10px);
  }

  h2 {
    &:hover {
      color: #45a8da;
    }
  }
`;

const Icon = styled.img``;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  font-family: Jost, sans-serif;
  line-height: 29px;
  color: #3f82b1;
  margin: 20px 10px;
`;

const Details = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: OpenSans, sans-serif;
  line-height: 24px;
  color: #444444;
  margin: 20px 10px;
`;
