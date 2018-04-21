import React from 'react';
import styled from 'styled-components';

import typography from './lib/typography';

const PatternWrapper = styled.div`
  margin-bottom: 4em;

  &:after {
    content: '';
    display: block;
    width: 300px;
    height: 4px;
    margin: 0 auto;
    background-color: #000;
  }
`;

const PatternTitle = styled.h2`
  ${typography}
  font-size: 24px;
`;

const PatternDescription = styled.p`
  ${typography}
  margin-bottom: 1em;
  font-weight: 400;
  color: #444;
`;

const PatternContainer = styled.div`
  margin-bottom: 4em;
  border: 1px dotted transparent;

  &:hover { border-color: #0d9; }
`;

const ThemeSelector = styled.div`
  ${typography}
  margin-bottom: 1em;
  text-align: right;

  & > strong {
    position: relative;
    top: -3px;
    font-size: .65em;
    text-transform: uppercase;
  }
`;

const ThemeButton = styled.button`
  ${typography}
  display: inline-block;
  -webkit-appearance: none;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin-left: .5em;
  background-color: transparent;

  &.current > span { border-color: #0d9; }

  & > span {
    display: inline-block;
    width: 1em;
    height: 1em;
    border-radius: 1em;
    border: 1px solid #ddd;
  }
`;

class Pattern extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: props.theme || 'blank',
    };
  }

  render() {
    const { title, description, themes, children } = this.props;
    const { theme } = this.state;

    return (
      <PatternWrapper>
        <div className="container">
          <PatternTitle>{title}</PatternTitle>
          {description !== '' && (
            <PatternDescription>{description}</PatternDescription>
          )}

          <ThemeSelector>
            <strong>Theme</strong>
            {themes.map((t, idx) =>
              <ThemeButton key={idx} type="button" className={`docs-btn-theme ${t == theme ? 'current' : ''}`} onClick={() => this.setState({ theme: t })}>
                <span className={`${t} ${t == theme ? 'current' : ''}`}></span>
              </ThemeButton>
            )}
          </ThemeSelector>
        </div>

        <PatternContainer>
          <div className={theme}>
            {children}
          </div>
        </PatternContainer>
      </PatternWrapper>
    );
  }
}

Pattern.defaultProps = {
  themes: ['blank', 'light-bg', 'dark-bg'],
  theme: 'blank',
};

export default Pattern;
