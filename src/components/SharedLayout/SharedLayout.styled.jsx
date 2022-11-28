import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: ${({ theme: { space } }) => space[3]}px;

  background-color: ${({ theme: { colors } }) => colors.accentSecondary};
  border-bottom: 2px solid;
`;

export const LinksList = styled.ul`
  display: inline-block;

  padding: ${({ theme: { space } }) => space[2]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};

  background-color: ${({ theme: { colors } }) => colors.light};
`;

export const LinksListItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: ${({ theme: { space } }) => space[3]}px;
  }
`;

export const HeaderLink = styled(NavLink)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes[4]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: black;

  &.active {
    color: ${({ theme: { colors } }) => colors.textColored};
    text-decoration: underline;
  }
`;
