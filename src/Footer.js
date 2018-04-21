import React from 'react';
import styled from 'styled-components';

import typography from './lib/typography';

const FooterWrapper = styled.div`
  ${typography};
  padding: 2em 0;
  background-color: #000;
  font-size: 0.85em;
  text-align: right;
  color: #666;
`;

export default () => (
  <FooterWrapper>
    <div className="container">
      launched by <a href="http://raketadesign.com" target="_blank" style={{ color: '#fff' }}>raketa</a>
    </div>
  </FooterWrapper>
);
