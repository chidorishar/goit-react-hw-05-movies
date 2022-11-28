import styled from 'styled-components';

export const CastCardsContainer = styled.ul`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${({ theme: { space } }) => space[2]}px; ;
`;

export const CastCard = styled.li`
  display: flex;

  align-items: flex-start;
  border-radius: ${({ theme: { radii } }) => radii.normal};

  background-color: ${({ theme: { colors } }) => colors.textColored}17;
  box-shadow: ${({ theme: { shadows } }) => shadows.nano};
`;

export const PersonPhoto = styled.img`
  flex-shrink: 0;

  border-radius: ${({ theme: { radii } }) => radii.normal};
  overflow: clip;
`;
