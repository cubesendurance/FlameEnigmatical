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

    //If entry secondFactor isn't defined we manually define and assume true
    if (!this.state.entry.secondFactor || this.state.entry.secondFactor.isTrue2FA === undefined) {
      this.state.entry.secondFactor = { isTrue2FA: false, secret: '' };
    }
  }

  formatSecret(secret) {
    return secret.replace(/\s/g, '').toUpperCase();
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    const value = target.value;
    this.setState(state => ({
      entry: { ...state.entry, [name]: value }
    }));
  };

  handleTrueTOTPInput = event => {
    const target = event.target;
    const value = this.formatSecret(target.value);
    this.setState(state => ({
      entry: { ...state.entry, 'secondFactor': { 'isTrue2FA': true, 'secret': value } }
    }));
  }

  handleFakeTOTPInput = event => {
    const target = event.target;
    const value = target.value;
    this.setState(state => ({
      entry: { ...state.entry, 'secondFactor': { 'isTrue2FA': false, 'secret': value } }
    }));
  }

  onSave = e => {
    e.preventDefault();
    let { uuid, entry } = this.state;
    // Need to make sure entry has secondFactor/secret set to '' if undefined
    // Which will occur if the client didn't enter a second factor
    if (!entry['secondFactor']) {
      entry['secondFactor'] = {
        'secret': '',
        'isTrue2FA': false
      }
    } else if (!entry['secondFactor']['secret']) {
      entry['secondFactor']['secret'] = '';
    }

    //Updating as expected
    this.props.onSave({ uuid, entry });

  };

  switch = (e) => {
    //Need to makesure that we update the value
    //This covers the edge case that the client enters a value 
    //then switches the type and clicks create/update
    let value = document.getElementById('secret').value;
  
    if (this.state.entry.secondFactor.isTrue2FA) {
      value = this.formatSecret(value); //Making sure conform to OTP library requirements
      this.setState(state => ({
        entry: { ...state.entry, 'secondFactor': { 'isTrue2FA': false,'secret':value } }
      }));
    } else {
      this.setState(state => ({
        entry: { ...state.entry, 'secondFactor': { 'isTrue2FA': true,'secret':value } }
      }));
    }
  }

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
                name="password"
                className="sk-input contrast"
                placeholder="passphrase"
                value={entry.password}
                onChange={this.handleInputChange}
                type="text"
              />
              <div>
                {this.state.entry.secondFactor.isTrue2FA ?
                  <div style={{ "display": "flex" }}>
                    <input
                      id='secret'
                      required
                      name="secret"
                      className="sk-input contrast"
                      placeholder="TOTP"
                      onChange={this.handleTrueTOTPInput}
                      type="text"
                    />
                    <div
                      onClick={this.switch}
                      className="sk-button constrast wide center"
                    >
                      Switch to non TOTP
              </div>
                  </div>
                  : <div style={{ "display": "flex" }}>
                    <input
                      id='secret'
                      name="secret"
                      className="sk-input contrast"
                      placeholder="Second factor (or leave blank)"
                      onChange={this.handleFakeTOTPInput}
                      type="text"
                    />
                    <div
                      onClick={this.switch}
                      className="sk-button constrast wide center"
                    >
                      Switch to TOTP
              </div>
                  </div>
                }
              </div>
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
