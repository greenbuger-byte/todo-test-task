import styled from "styled-components";

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';

export const LoginContent = styled('div')`
  background-color: ${colors.whiteA10};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LoginWrapper = styled('div')`
  width: 80%;
  ${typo.P_M};
  box-shadow: ${colors.shadow1};
  margin: auto;
  
`;

export const LoginForm = styled('form')`
  padding: 2rem;
  color: ${colors.black};
`;

export const LoginTitle = styled('h1')`
  ${typo.H2_R}
  width: 100%;
  text-align: center;
`;

