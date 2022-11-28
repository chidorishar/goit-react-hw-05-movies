import styled from 'styled-components';

export const ReviewsListItem = styled.li`
  padding: ${({ theme: { space } }) => space[3]}px
    ${({ theme: { space } }) => space[5]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};

  background-color: ${({ theme: { colors } }) => colors.textColored}17;
  box-shadow: ${({ theme: { shadows } }) => shadows.nano};

  &:not(:last-child) {
    margin-bottom: ${({ theme: { space } }) => space[2]}px;
  }
`;

export const AuthorNickname = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes[2]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};

  margin-bottom: ${({ theme: { space } }) => space[2]}px;
`;

export const ReviewText = styled.p`
  text-indent: 2.5%;
  white-space: break-spaces;
`;
