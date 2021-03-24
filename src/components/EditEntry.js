import React from 'react';

export default class EditEntry extends React.Component {
  static defaultProps = {
    entry: {}
  };

  constructor(props) {
    super(props);

    this.state = {
      uuid: this.props.uuid,
      entry: this.props.entry
    };
  }

  formatSecret(secret) {
    return secret.replace(/\s/g, '').toUpperCase();
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    const value =
      name === 'secret' ? this.formatSecret(target.value) : target.value;
    if(name === 'secret'){
      this.setState(state => ({
        entry: { ...state.entry, 'secondFactor':{'isTrue2FA': true, 'secret': value}}
      }));
    } else {
      this.setState(state => ({
        entry: { ...state.entry, [name]: value }
      }));
    }
  };

  onSave = e => {
    e.preventDefault();
    let { uuid, entry } = this.state;
    // Need to make sure entry has secondFactor/secret set to '' if undefined
    // Which will occur if the client didn't enter a second factor
    if(!entry['secondFactor']){
      entry['secondFactor'] = {
        'secret':'',
        'isTrue2FA': false
      }
    } else if (!entry['secondFactor']['secret']){
      entry['secondFactor']['secret'] = '';
    }
    
    //Updating as expected
    this.props.onSave({ uuid, entry });
    
  };

  render() {
    const { uuid, entry } = this.state;

    return (
      <div className="auth-edit sk-panel">
        <div className="sk-panel-content">
          <div className="sk-panel-section">
            <div className="sk-panel-section-title sk-panel-row">
              {uuid != null ? 'Edit entry' : 'Add new entry'}
              <div
                onClick={this.props.onImport}
                className="sk-button constrast wide"
              >
                Import
              </div>
            </div>
            <form onSubmit={this.onSave}>
              <input
                name="service"
                className="sk-input contrast"
                placeholder="Name"
                value={entry.service}
                onChange={this.handleInputChange}
                type="text"
                required
              />
              <input
                name="account"
                className="sk-input contrast"
                placeholder="Account"
                value={entry.account}
                onChange={this.handleInputChange}
                type="text"
              />
              <input
                name="secret"
                className="sk-input contrast"
                placeholder="TOTP"
                onChange={this.handleInputChange}
                type="text"
              />
              <input
                name="notes"
                className="sk-input contrast"
                placeholder="Notes"
                value={entry.notes}
                onChange={this.handleInputChange}
                type="text"
              />
              <div className="sk-panel-row">
                <div className="sk-button-group stretch">
                  <button
                    type="button"
                    onClick={this.props.onCancel}
                    className="sk-button neutral"
                  >
                    <div className="sk-label">Cancel</div>
                  </button>
                  <button type="submit" className="sk-button info">
                    <div className="sk-label">
                      {uuid != null ? 'Save' : 'Create'}
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
