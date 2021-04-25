import React from 'react';
import { totp } from '../lib/otp';
import AuthMenu from './AuthMenu';

export default class AuthEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: this.props.entry['account'],
      passphrase: this.props.entry['password'],
      token: '',
    };

    this.updateToken();
  }

  updateToken = async () => {
    const secret = this.props.entry['secondFactor']['secret'];
    const shouldContinue = this.props.entry['secondFactor']['isTrue2FA'];
    if (!secret || !shouldContinue) return;//In the event of undefined we return
    const token = await totp.gen(secret);

    const timeLeft = this.getTimeLeft();
    this.setState({
      token
    });

    this.timer = setTimeout(this.updateToken, timeLeft * 1000);
  };

  getTimeLeft() {
    const seconds = new Date().getSeconds();
    return seconds > 29 ? 60 - seconds : 30 - seconds;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // If the secret changed make sure to recalculate token
    if (nextProps.entry.secret !== this.props.entry.secret) {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.updateToken, 0);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    this.props.onEntryChange({
      id: this.props.id,
      name,
      value: target.value
    });
  };

  copyAccount = event => {
    const textField = document.createElement('textarea');
    textField.innerText = this.state.account;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    this.props.onCopyToken();
  };

  copyPassphrase = event => {
    const textField = document.createElement('textarea');
    textField.innerText = this.state.passphrase;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    this.props.onCopyToken();
  };

  copyToken = event => {
    const textField = document.createElement('textarea');
    textField.innerText = this.state.token;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    this.props.onCopyToken();
  };

  render() {
    const { service, notes } = this.props.entry;
    const { onEdit, onRemove } = this.props;
    const { uuid } = this.props.entry

    return (
      <div className="sk-notification sk-base">
        <div className="auth-entry">
          <div className="auth-info">
            <div className="auth-service"><h1>{service}</h1></div>
          </div>
          <div className="auth-details">
            <div className="sk-button-row fill" style={{ "display": "flex" }}>
              <div className="sk-button lighter" onClick={this.copyAccount}>
                <p className="larger">Account</p>
              </div>
              <div className="sk-button lighter larger" onClick={this.copyPassphrase}>
              <p className="larger">Passphrase</p>
              </div>
              <div className="sk-button lighter larger" onClick={this.copyToken}>
              <p className="larger">Secondfactor</p>
              </div>
            </div>
            <div className="auth-options">
            <AuthMenu
              onEdit={onEdit.bind(this, uuid)}
              onRemove={onRemove.bind(this, uuid)}
            />
          </div>
          </div>
        </div>
        {notes && (
          <div className="auth-notes-row">
            <div className="auth-notes">{notes}</div>
          </div>
        )}
      </div>
    );
  }
}
