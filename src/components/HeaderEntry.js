import React from 'react';

/**
 * Provides the unified search and quick information that stays constant regardless of the state the rest of the application is in.
 * @prop {onAddNew} function to call when person clicks the '+' button
 * @prop {onUpdateSearch} function to call when the person changes text input field
 */
export default class HeaderEntry extends React.Component {
  static defaultProps = {
    text: ''
  };

  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
    };
  }

  onSearch = event => {
    this.setState(state => ({
        text: event.target.value
    }));

    this.props.onUpdateSearch(event.target.value);
  }

  onClear = () => {
      document.getElementById('header-bar-search').value = '';
      this.setState(state => ({
          text:''
      }));

      this.props.onUpdateSearch('');
  }

  render() {
    return (
        <div id="header">
        <div className="section-title-bar-header">
          <div>Orcawolf Secrets</div>
          <div class="sk-button constrast wide" style={{"font-size":"larger"}} onClick={this.props.onAddNew}>+</div>
        </div>
        <div id="header-search-container">
          <input className="sk-input constrast filter-bar" type="text" id="header-bar-search" placeholder="Search secrets" onChange={this.onSearch} />
          {(this.state.text !== '') && <div id="search-clear-button" onClick={this.onClear}>✕</div>}
        </div>

      </div>
    );
  }
}