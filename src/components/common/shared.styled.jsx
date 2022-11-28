import { color, flexbox, layout, position, space } from 'styled-system';

import styled from 'styled-components';

export const Box = styled.div(space, color, layout, flexbox, position);

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Section = styled.section`
  padding: ${({ theme: { space } }) => space[4]}px;
`;

export const MainWrapper = styled.main`
  display: flex;

  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: max-content;
  margin: 0 auto;
  padding: ${({ theme: { space } }) => space[3]}px;
  text-align: center;
`;
