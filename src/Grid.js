import React from 'react';
import styled from 'styled-components';

import typography from './lib/typography';

const Column = styled.div`
  ${typography}
  margin-bottom: 1em;
  background-color: #efefef;

  & > h3 {
    padding: .5em;
    margin-bottom: 0;
    font-size: 1.777em;
    text-align: center;
  }
`;

export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      debug: false,
    };
  }

  render() {
    const { containerWidth, gutter } = this.props;
    const { debug } = this.state;

    return (
      <div>
        <div className="container">
          <ul>
            <li><strong>Container width: </strong>{containerWidth}px</li>
            <li><strong>Columns: </strong>12</li>
            <li><strong>Gutter: </strong>{gutter}px</li>
          </ul>

          <button type="button" className="btn-primary" onClick={() => this.setState({ debug: !debug })}>Toggle grid</button>

          <br/>
          <br/>

          <div className="grid">
            <Column className="full-width">
              <h3>12/12</h3>
            </Column>
          </div>

          <div className="grid">
            <Column className="half">
              <h3>6/12</h3>
            </Column>
            <Column className="half">
              <h3>6/12</h3>
            </Column>
          </div>

          <div className="grid">
            <Column className="third">
              <h3>4/12</h3>
            </Column>
            <Column className="third">
              <h3>4/12</h3>
            </Column>
            <Column className="third">
              <h3>4/12</h3>
            </Column>
          </div>

          <div className="grid">
            <Column className="fourth">
              <h3>3/12</h3>
            </Column>
            <Column className="fourth">
              <h3>3/12</h3>
            </Column>
            <Column className="fourth">
              <h3>3/12</h3>
            </Column>
            <Column className="fourth">
              <h3>3/12</h3>
            </Column>
          </div>
        </div>

        <div id="debug" className={debug ? 'debug-on' : ''}>
          <Column className="col" />
          <Column className="col" />
          <Column className="col" />
          <Column className="col" />
          <Column className="col" />
          <Column className="col" />
          <Column className="col" />
          <Column className="col" />
          <Column className="col" />
          <Column className="col" />
          <Column className="col" />
          <Column className="col" />
        </div>
      </div>
    );
  }
}
