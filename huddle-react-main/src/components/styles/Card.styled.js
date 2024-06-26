import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #fff;
  border-raidus: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ direction }) => direction || "row"};
  & img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
  }
`;
