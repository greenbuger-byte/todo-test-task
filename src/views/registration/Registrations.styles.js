
import styled from "styled-components";

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';

export const RegistrationContent = styled('div')`
  background-color: ${colors.whiteA10};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const RegistrationInfo = styled('div')`
  height: calc( 100vh - 5rem );
  display: flex;
  padding: 2rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.sky};
`;
export const RegistrationInfoTitle = styled('div')`
  ${typo.H2_R}
  margin: 2rem 0;
`

export const RegistrationWrapper = styled('div')`
  width: 80%;
  ${typo.P_M};
  box-shadow: ${colors.shadow1};
  margin: auto;
`;

export const RegistrationTitle = styled('h1')`
  ${typo.H2_R}
  width: 100%;
  text-align: center;
`;

export const RegistrationForm = styled('form')`
  padding: 2rem;
  color: ${colors.black};
`;
