import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainStyled = styled.main`
  position: relative;
  padding-top: ${({ theme: { space } }) => space[4]}px;
`;

export const ImageThumb = styled.div`
  border-radius: ${({ theme: { radii } }) => radii.big};
  overflow: clip;

  box-shadow: ${({ theme: { shadows } }) => shadows.small};
`;

export const ReturnButton = styled(Link)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};

  display: block;
  position: absolute;
  top: 0;
  left: 0;

  width: max-content;
  padding: ${({ theme: { space } }) => space[1]}px
    ${({ theme: { space } }) => space[2]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};
  border: none;

  background-color: ${({ theme: { colors } }) => colors.accent}CC;
  box-shadow: ${({ theme: { shadows } }) => shadows.small};

  transition: color ${({ theme: { transitions } }) => transitions.normal},
    background-color ${({ theme: { transitions } }) => transitions.normal};

  &:hover {
    color: ${({ theme: { colors } }) => colors.light};
    background-color: ${({ theme: { colors } }) => colors.accent};
  }
`;

export const PosterImg = styled.img`
  transition: transform ${({ theme: { transitions } }) => transitions.normal};

  &:hover {
    transform: scale(1.2);
  }
`;

export const AdditionalInfoHeader = styled.h3`
  text-align: center;
  width: ${({ theme: { sizes } }) => sizes.normal};
  margin: 0 auto;
  margin-bottom: ${({ theme: { space } }) => space[2]}px;
  padding: ${({ theme: { space } }) => space[3]}px
    ${({ theme: { space } }) => space[5]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};

  background-color: ${({ theme: { colors } }) => colors.accent};
  box-shadow: ${({ theme: { shadows } }) => shadows.small};
`;

export const AdditionalInfoLinks = styled.ul`
  display: flex;

  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const AdditionalInfoItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme: { space } }) => space[2]}px;
  }
`;

export const AdditionalInfoLink = styled(NavLink)`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  text-align: center;

  display: block;
  width: ${({ theme: { sizes } }) => sizes.small};
  margin: 0 auto;
  padding: ${({ theme: { space } }) => space[2]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};

  outline: 1px dotted grey;
  background-color: ${({ theme: { colors } }) => colors.accentSecondary};
  box-shadow: ${({ theme: { shadows } }) => shadows.inputInset};

  transition: color ${({ theme: { transitions } }) => transitions.normal},
    transform ${({ theme: { transitions } }) => transitions.normal},
    box-shadow ${({ theme: { transitions } }) => transitions.normal};

  &.active {
    color: ${({ theme: { colors } }) => colors.light};
    text-decoration: underline;
  }

  &:hover {
    transform: scale(1.1);
    color: ${({ theme: { colors } }) => colors.accent};
    box-shadow: ${({ theme: { shadows } }) => shadows.medium};
  }
`;
