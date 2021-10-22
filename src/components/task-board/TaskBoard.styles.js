import styled from "styled-components";

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';
import Avatar from "react-avatar";

const statusColors = {
  progress: `.2rem solid ${colors.red}`,
  completed: `.2rem solid ${colors.green}`,
  canceled: `.2rem solid ${colors.cloud4}`,
  implementation: `.2rem solid ${colors.mysql}`,
}

export const CardWrapper = styled('div')`
  padding: .1rem;
  position: relative;
`;
export const CardDrag = styled.div`
  background-color: ${colors.white};
  position: relative;
  border: .1rem solid ${ (props) => props.expired ? colors.highlightRed : colors.shadow3 };
  opacity: ${ (props) => props.expired ? .6 : 1};
  border-left:${ (props) => statusColors[props.status] || `.2rem solid ${colors.cloud1}`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: .3rem;
  box-shadow: ${colors.shadow};
  ${(props) => props.isDrag && 'transform: rotate(-10deg)'}
  :hover{
    box-shadow: ${colors.shadow3};
  }
`;

export const AuthorAvatar = styled(Avatar)`
  margin-right: 1rem;
`;

export const CardTitle = styled('div')`
  ${typo.P_B};
  padding: .3rem;
  flex:1;
  padding-bottom: .1rem;
`;

export const CardDescription = styled('div')`
  ${typo.Label_S_M};
  width: 100%;
  color: ${colors.mysql};
  overflow-y: scroll;
  max-height: 10rem;
  margin-top: 1rem;
  padding: .3rem;
`;

export const CardDragWrapper = styled('div')`
  display: flex;
`;

export const CardContent = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
`;

export const CardButtons = styled('div')`
  display: flex;
  width: 4rem;
  height: 3rem;
  align-items: end;
  text-align: right;
  flex-direction: column;
`;

export const CardResponsible = styled('div')`
  display: flex;
  margin: 0 -0.2rem;
  border: 0.01rem solid ${colors.cloud1};
  border-radius: 50%;
  box-shadow: ${colors.shadow};
  :first-child{
    margin-left: 0;
  }
`;

export const CardResponsibleContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: .4rem 0;
`;

export const ExpiredMessage = styled('div')`
  padding: 0;
  margin: .2rem;
  ${typo.Label_S_M}
  color: ${colors.red}
`;

export const CardTime = styled('div')`
  ${typo.Label_S_M}
  color: ${colors.mysql}
  text-transform: lowercase;
`;

export const CardStatusChange = styled('div')`
  position: absolute;
  top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  right: -2rem;
  padding: 1rem;
  background-color: ${colors.white};
  border: .1rem solid ${colors.cloud1};
  height: 8rem;
  width: 3rem;
  flex-direction: column;
  transition: .6s;
  border-radius: 0 1rem 1rem 0;
`;

export const CardStatusItem = styled('div')`
  width: 1rem;
  height: 1rem;
  margin-top:.3rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: ${props => props.current ? 1 : 0.8};
  border: .1rem solid ${props => props.current ? colors.black : 'none'};
  :hover{
    opacity: 1;
  }
`;