import React from 'react';

class DataImportDialog extends React.Component {
    state = {
        jsonResponse: {}
    };

    updateText() { }
    render() {
        return (
            <div className="auth-overlay">
                <div className="auth-dialog sk-panel">
                    <div className="sk-panel-header">
                        <div className="sk-panel-header-title">Import Secrets</div>
                    </div>
                    <div className="sk-panel-content">
                        <div className="sk-panel-section sk-panel-hero">
                            <div className="sk-panel-row">
                                Please paste .JSON from your password manager below
                            </div>
                        </div>
                        <div className="sk-panel-section sk-panel-hero">
                            <textarea id="jsonImport" onChange={this.updateText}></textarea>
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
            </div>
        );
    }
}

export default DataImportDialog;
