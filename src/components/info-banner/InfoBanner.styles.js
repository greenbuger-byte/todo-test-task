import styled from "styled-components";

import * as colors from "../../theme/colors";
import * as typo from "../../theme/typography";

export const InfoBannerWrapper = styled('div')`
  height: calc( 100vh - 5rem );
  display: flex;
  padding: 2rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.sky};
`;
export const InfoTitle = styled('div')`
  ${typo.H2_R}
  margin: 2rem 0;
`;


export const InfoLogo = styled('img')`
  width: 50rem;
`;