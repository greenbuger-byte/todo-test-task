import styled from "styled-components";

import * as typo from "../../theme/typography";
import * as colors from "../../theme/colors";

export const NoFoundedWrapper = styled('div')`
  ${typo.H3_R};
  padding: 2rem;
  border-radius: .3rem;
  border: .1rem dashed ${colors.cloud4};
  margin: auto;
  display: flex;
  align-items: center;
  color: ${colors.cloud4};
  text-align: center;
  svg{
    width: 2rem;
    margin-right: 1rem;
    path{
      fill: ${colors.cloud4}
    }
  }
`;