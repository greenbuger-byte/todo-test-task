import styled from "styled-components";
import * as colors from "../../theme/colors";
import * as typo from "../../theme/typography";

export const TaskListColumn = styled.div`
  border-radius: 1rem 1rem 0 0;
  display: flex;
  margin: 0 .5rem;
  padding: .3rem;
  flex-direction: column;
  transition: .5s;
  :hover{
    background-color: ${colors.cloud0};
  }
`;

export const TaskListTitle = styled.h1`
  ${typo.P_B};
  text-align: center;
`

export const TaskListWrapper = styled.div`
  display: flex;
  overflow: hidden;
  overflow-y: scroll;
  flex-direction: column;
`;