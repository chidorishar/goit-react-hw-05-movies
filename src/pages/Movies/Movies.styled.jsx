import styled from 'styled-components';

export const SearchForm = styled.form`
  margin-bottom: ${({ theme: { space } }) => space[3]}px;
  padding: ${({ theme: { space } }) => space[3]}px
    ${({ theme: { space } }) => space[5]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};

  color: ${({ theme: { colors } }) => colors.light};
  background-color: ${({ theme: { colors } }) => colors.accent};
  box-shadow: ${({ theme: { shadows } }) => shadows.small};
`;

export const SearchInput = styled.input`
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};

  flex-grow: 1;

  padding: ${({ theme: { space } }) => space[2]}px;
  border-top-left-radius: ${({ theme: { radii } }) => radii.big};
  border-bottom-left-radius: ${({ theme: { radii } }) => radii.big};

  border: none;
`;

export const SearchButton = styled.button`
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;

  border-top-right-radius: ${({ theme: { radii } }) => radii.big};
  border-bottom-right-radius: ${({ theme: { radii } }) => radii.big};
  border: none;

  transition: color ${({ theme: { transitions } }) => transitions.normal};

  &:hover {
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;
