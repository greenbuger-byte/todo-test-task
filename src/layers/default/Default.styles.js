import styled from "styled-components";

import * as colors from '../../theme/colors';

export const DefaultContainer = styled('div')`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns:1.2fr 4fr;
  min-height: 100vh;
  margin: auto;
  background: ${colors.whiteA10};
`;

export const DefaultWrapper = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
