import styled from "styled-components";

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';

export const FooterWrapper = styled('div')`
  background-color: ${colors.cloud1};
  ${typo.P_S3_R};
  width: 100vw;
  min-height: 20rem;
`;

export const FooterContainer = styled('div')`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 2rem 0;
`;

export const FooterLogo = styled('div')`
  ${typo.P_R}
`;

export const FooterBlock = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`;