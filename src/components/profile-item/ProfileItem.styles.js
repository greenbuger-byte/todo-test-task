import styled from "styled-components";
import * as typo from "../../theme/typography";
import Avatar from "react-avatar";
import * as colors from "../../theme/colors";
import Button from "../button";


export const ProfileItemName = styled.div`
  ${typo.Label_S_SB};
  text-align: center; 
  padding: .8rem;
  width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileButton = styled(Button)`
  width: 3rem;
  border-radius: 50%;
  height: 3rem;
  padding: 0;
  position: absolute;
  top: .1rem;
  right: .1rem;
`;

export const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`;

export const ProfileItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: .2rem;
  position: relative;
  align-items: center;
  margin: .4rem;
  flex-direction: column;
  width: 10rem;
  border-radius: .3rem;
  border: .1rem solid ${props => props.active ? colors.green : colors.white};
`;

export const ProfileContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;