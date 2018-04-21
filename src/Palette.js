import React from 'react';
import styled from 'styled-components';

import typography from './lib/typography';

const PaletteWrapper = styled.div`
  ${typography}
  display: flex;
  flex-wrap: wrap;
`;

const Color = styled.div`
  ${typography}
  margin-bottom: 1em;
  margin-right: 1em;
`;

const Preview = styled.div`
  ${typography}
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
`;

const Description = styled.div`
  ${typography}
  font-size: .85em;
`;

const Palette = ({ colors }) => (
  <div className="container">
    <PaletteWrapper>
      {colors.map((item, idx) => (
        <Color key={idx}>
          <Preview style={{ backgroundColor: item.color }} />
          <Description>{item.label}: {item.color}</Description>
        </Color>
      ))}
    </PaletteWrapper>
  </div>
);

Palette.defaultProps = {
  colors: [
    {color: 'black', label: 'Black'},
    {color: 'white', label: 'Black'},
    {color: 'red', label: 'Red'},
  ],
};

export default Palette;
