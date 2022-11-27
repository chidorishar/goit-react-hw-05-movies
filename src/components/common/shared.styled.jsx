import { color, flexbox, layout, space } from 'styled-system';

import styled from 'styled-components';

export const Box = styled.div(space, color, layout, flexbox);

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;
