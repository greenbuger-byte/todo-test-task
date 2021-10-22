import styled from "styled-components";

import * as typo from '../../theme/typography';
import * as colors from '../../theme/colors';

export const HomeTitle = styled('h1')`
  ${typo.H1}
`;

export const HomeLoginWrapper = styled.div`
  padding: 1rem;
  display: flex;
  ${typo.H2_R}
  border-radius: .3rem;
  border: .1rem solid ${colors.cloud1};
  a{
    ${typo.H2_R}
    padding: 0 1rem;
  }
`;
