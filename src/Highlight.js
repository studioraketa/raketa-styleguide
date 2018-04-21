import React from 'react';
import styled from 'styled-components';

const Hightlight = styled.span`
  color: #0d9;
`;

export default ({ children }) => <Hightlight>{children}</Hightlight>;
