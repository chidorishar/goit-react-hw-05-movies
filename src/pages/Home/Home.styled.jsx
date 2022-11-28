import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: ${({ theme: { space } }) => space[3]}px;
  padding: ${({ theme: { space } }) => space[2]}px
    ${({ theme: { space } }) => space[5]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};

  color: ${({ theme: { colors } }) => colors.light};
  background-color: ${({ theme: { colors } }) => colors.accent};
  box-shadow: ${({ theme: { shadows } }) => shadows.small};
`;
