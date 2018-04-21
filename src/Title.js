import React from 'react';
import styled from 'styled-components';

import typography from './lib/typography';

const Title = styled.div`
  ${typography}
  padding: 2em 0;

  & > h1 { font-size: 36px; }
`;

export default ({ children }) => (
  <div className="container">
    <Title>
      <h1>{children}</h1>
    </Title>
  </div>
);
