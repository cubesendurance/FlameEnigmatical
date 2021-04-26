import React from 'react';

/**
 * Provides the unified search and quick information that stays constant regardless of the state the rest of the application is in.
 * @prop {onAddNew} function to call when person clicks the '+' button
 * @prop {onUpdateSearch} function to call when the person changes text input field
 */
export default class HeaderEntry extends React.Component {
  static defaultProps = {
  };

  render() {
    return (
      <div id="header">
        <div className="section-title-bar-header">
          <div></div>
          <div class="sk-button constrast wide" style={{"font-size":"larger"}} onClick={this.props.onAddNew}>+</div>
        </div>
      </div>
    );
  }
}