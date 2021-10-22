import styled from "styled-components";

import Button from "../../components/button";

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';


export const ErrorContainer = styled('div')`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  bottom: 3rem;
`;

export const TaskContainer = styled('div')`
  background: ${colors.whiteA10};
  position: relative;
  min-height: 100vh;
`;

export const TaskWrapper = styled('div')`
  width: 90%;
  margin: auto;
`;
export const TasksButtonFilterReset = styled(Button)`
  height: 9rem;
  width: 9rem;
  ${typo.Label_S_M}
`;

export const TaskGridContainer = styled('div')`
  display: grid;
  margin: auto;
`;
export const TaskListContainer = styled('div')`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const TaskUsers = styled('div')`
  display: flex;
  margin: 2rem 0;
  overflow-x: scroll;
`;

