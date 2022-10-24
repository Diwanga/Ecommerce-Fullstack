import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #1cff10;
  color: #0400d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>New Member Deal! Free Shipping on Orders Over $25</Container>;
};

export default Announcement;
