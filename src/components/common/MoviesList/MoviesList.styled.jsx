import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
  padding: 0 ${({ theme: { space } }) => space[4]}px;
`;

export const MoviesListItem = styled.li`
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};

  margin: 0 auto;
  padding: ${({ theme: { space } }) => space[2]}px
    ${({ theme: { space } }) => space[3]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};
  transform: scale(1, 1);

  outline: 1px dotted grey;
  background-color: ${({ theme: { colors } }) => colors.accentSecondary};
  box-shadow: ${({ theme: { shadows } }) => shadows.small};

  transition: color ${({ theme: { transitions } }) => transitions.normal},
    box-shadow ${({ theme: { transitions } }) => transitions.normal},
    transform ${({ theme: { transitions } }) => transitions.normal};

  &:not(:last-child) {
    margin-bottom: ${({ theme: { space } }) => space[2]}px;
  }

  &:hover {
    text-decoration: double;
    color: ${({ theme: { colors } }) => colors.accent};
    box-shadow: ${({ theme: { shadows } }) => shadows.medium};
    transform: scale(1.2, 1.2);
  }
`;
