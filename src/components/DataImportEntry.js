import React from 'react';


const initialState = {
    jsonResponse: {}
};
class DataImportDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.updateText = this.updateText.bind(this);
    }

    updateText(event) {
        this.props.onUpdate(event.target.value);
    }
    render() {
        return (
            <div className="auth-edit sk-panel">

                <div className="sk-panel-content">
                    <div className="sk-panel-section">
                        <div className="sk-panel-section-title sk-panel-row">
                            Please paste .JSON from your password manager below
                            </div>
                    </div>
                    <div className="sk-panel-section sk-panel-hero">
                        <textarea id="jsonImport" rows="15" style={{ "resize": "none" }} className="sk-input contrast" onChange={this.updateText}></textarea>
                    </div>
                </div>
                <div className="sk-panel-footer">
                    <div className="sk-button-group stretch">
                        <div className="sk-button neutral" onClick={this.props.onCancel}>
                            <div className="sk-label">Cancel</div>
                        </div>
                        <div className="sk-button info" onClick={this.props.onConfirm(this.state.jsonResponse)}>
                            <div className="sk-label">Import</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataImportDialog;
