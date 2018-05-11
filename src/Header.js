import React from 'react';
import styled from 'styled-components';

import typography from './lib/typography';

const HeaderWrapper = styled.div`
  ${typography}
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  z-index: 10;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90px;

    & > .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 699px) {
    text-align: center;
  }
`;

const Logo = styled.a`
  ${typography}
  display: inline-block;
  text-decoration: none;

  & > img {
    display: inline-block;
    height: 24px;
  }

  & > small {
    display:block;
    margin-top: .25em;
    font-size: 0.65em;
    color: #aaa;
  }

  @media (max-width: 699px) {
    margin-bottom: 1em;
  }
`;

const Navigation = styled.nav`
  & > a {
    margin-left: 2em;
    font-weight: 500;
    text-decoration: none;
    color: #000;

    &:first-child { margin-left: 0; }

    &:hover { color: #0d9; }
  }

  @media (max-width: 699px) {
    width: 100%;
    padding: 0 1em;
    overflow-y: auto;
    margin-bottom: 1em;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { slogan } = this.props;
    const { isOpen } = this.state;

    return (
      <HeaderWrapper className={isOpen ? 'show-nav' : ''}>
        <div className="container">
          <Logo href="/">
            <img src="/static/assets/logo-black.svg" alt="" />
            {slogan &&
              <small>{slogan}</small>
            }
          </Logo>

          <Navigation>
            <a href="/typography">Typography</a>
            <a href="/colors">Colors</a>
            <a href="/grid">Grid</a>
            <a href="/forms">Forms</a>
            <a href="/components">Components</a>
            <a href="/playground">Playground</a>
            <a href="/pages">Pages</a>
          </Navigation>
        </div>
      </HeaderWrapper>
    );
  }
}

Header.defaultProps = {
  slogan: 'Design system by Studio Raketa',
};

export default Header;
