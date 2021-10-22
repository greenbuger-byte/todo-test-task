import styled from "styled-components";
import Button from "../button";
import * as colors from "../../theme/colors";
import { popover } from "../../theme/layers";

export const TaskPanelWrapper = styled.div`
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  height: 4rem;
  width: 100%;
  position: sticky;
  top: 5rem;
  margin: 0 0 3rem 0;
  box-shadow: ${colors.shadow0};
  z-index: ${popover};
`;

export const TaskPanelBlock = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

export const StyledButton = styled(Button)`
  max-height: 3rem;
  margin: .3rem;
`;