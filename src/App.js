import React from 'react';
import update from 'immutability-helper';
import EditEntry from './components/EditEntry';
import ViewEntries from './components/ViewEntries';
import ConfirmDialog from './components/ConfirmDialog';
import DataErrorAlert from './components/DataErrorAlert';
import { EditorKit, EditorKitDelegate } from 'sn-editor-kit';
import DataImportEntry from './components/DataImportEntry';
import { importJSON } from './datatransformation/import/import';
import { isValidFormat } from './datatransformation/verification/verification';

//Testing harness <3

const initialState = {
  text: '',
  jsonPrepImport: '',
  entries: [],
  parseError: false,
  importMode: false,
  editMode: false,
  editEntry: null,
  confirmRemove: false,
  displayCopy: false
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.configureEditorKit();
    this.state = initialState;
    this.attemptImport = this.attemptImport.bind(this);
    this.updateTextState = this.updateTextState.bind(this);
  }

  /**
   * Link to standard notes.
   */
  configureEditorKit() {
    let delegate = new EditorKitDelegate({
      setEditorRawText: text => {
        let parseError = false;
        let entries = [];

        if (text) {
          try {
            entries = JSON.parse(text);
            if (!isValidFormat(entries)) {
              parseError = true;
              entries = [];//We need to make sure entries is empty array otherwise we'll get a
              // blank screen (side effect of converting JSON object that's valid but not correct format)
            }
          } catch (e) {
            // Couldn't parse the content
            parseError = true;
          }
        }

        this.setState({
          ...initialState,
          text,
          parseError,
          entries
        });
      },
      generateCustomPreview: text => {
        let entries = [];
        try {
          entries = JSON.parse(text);
        } finally {
          return {
            html: `<div><strong>${entries.length}</strong> TokenVault Entries </div>`,
            plain: `${entries.length} TokenVault Entries`,
          };
        }
      },
      clearUndoHistory: () => { },
      getElementsBySelector: () => []
    });

    this.editorKit = new EditorKit({
      delegate: delegate,
      mode: 'json',
      supportsFilesafe: false
    });
  }


  saveNote(entries) {
    this.editorKit.onEditorValueChanged(JSON.stringify(entries, null, 2));
  }

  // Entry operations
  addEntry = entry => {
    this.setState(state => {
      const entries = state.entries.concat([entry]);
      this.saveNote(entries);

      return {
        editMode: false,
        editEntry: null,
        entries
      };
    });
  };

  addEntries = newEntries => {
    this.setState(state => {
      const entries = state.entries.concat(newEntries);
      this.saveNote(entries);

      return {
        editMode: false,
        editEntry: null,
        entries
      };
    });
  };

  editEntry = ({ id, entry }) => {
    this.setState(state => {
      const entries = update(state.entries, { [id]: { $set: entry } });
      this.saveNote(entries);

      return {
        editMode: false,
        editEntry: null,
        entries
      };
    });
  };

  removeEntry = id => {
    this.setState(state => {
      const entries = update(state.entries, { $splice: [[id, 1]] });
      this.saveNote(entries);

      return {
        confirmRemove: false,
        editEntry: null,
        entries
      };
    });
  };

  // Event Handlers
  onAddNew = () => {
    this.setState({
      editMode: true,
      editEntry: null
    });
  };

  onImportNew = () => {
    this.setState({
      importMode: true,
      editMode: false
    })
  }

  attemptImport = () => {
    let rawJSON = null;

    try {
      rawJSON = JSON.parse(this.state.jsonPrepImport);
    } catch (error) {
      console.log("Error occured parsing a note");
    }

    if (rawJSON) {
      let importStatusAndcontent = importJSON(rawJSON)
      if (importStatusAndcontent[1]) {
        this.addEntries(importStatusAndcontent[0]);
      }
    }

    this.setState({
      importMode: false
    })
  }

  updateTextState = (text) => {
    this.setState({
      jsonPrepImport: text
    });
  }

  onEdit = id => {
    this.setState(state => ({
      editMode: true,
      importMode: false,
      editEntry: {
        id,
        entry: state.entries[id]
      }
    }));
  };

  onCancel = () => {
    this.setState({
      confirmRemove: false,
      editMode: false,
      editEntry: null
    });
  };

  onRemove = id => {
    this.setState(state => ({
      confirmRemove: true,
      editEntry: {
        id,
        entry: state.entries[id]
      }
    }));
  };

  onSave = ({ id, entry }) => {
    // If there's no ID it's a new note
    if (id != null) {
      this.editEntry({ id, entry });
    } else {
      this.addEntry(entry);
    }
  };

  onCopyToken = () => {
    this.setState({
      displayCopy: true
    });
    if (this.clearTooltipTimer) {
      clearTimeout(this.clearTooltipTimer);
    }

    this.clearTooltipTimer = setTimeout(() => {
      this.setState({
        displayCopy: false
      });
    }, 2000);
  };

  render() {
    const editEntry = this.state.editEntry || {};
    return (
      <div className="sn-component">
        <div
          className={`auth-copy-notification ${this.state.displayCopy ? 'visible' : 'hidden'
            }`}
        >
          <div className="sk-panel">
            <div className="sk-font-small sk-bold">
              Copied token to clipboard.
            </div>
          </div>
        </div>
        {this.state.parseError && <DataErrorAlert />}

        <div id="header" style={{"padding-left":"13px", "padding-right":"13px"}}>
          <div className="section-title-bar-header" style={{"min-width":"100%"}} onClick={this.onAddNew}>
            <div style={{"font-weight":"800"}}>Orcawolf Secrets</div>
            <div class="sk-button constrast wide" style={{"font-size":"larger"}}>+</div>
          </div>
          <div style={{ "position": "relative", "min-width":"100%" }}>
            <input className="sk-input constrast filter-bar" type="text" placeholder="Search secrets" />
            <div id="search-clear-button">✕</div>
          </div>
        </div>

        <div id="content">
          {this.state.importMode &&
            <DataImportEntry
              onUpdate={(text) => this.updateTextState(text)}
              onConfirm={() => this.attemptImport}
              onCancel={() => this.setState({ importMode: false })}
            />
          }
          {this.state.editMode ? (
            <EditEntry
              id={editEntry.id}
              entry={editEntry.entry}
              onSave={this.onSave}
              onCancel={this.onCancel}
              onImport={this.onImportNew}
            />
          ) : (
            <ViewEntries
              entries={this.state.entries}
              onEdit={this.onEdit}
              onRemove={this.onRemove}
              onCopyToken={this.onCopyToken}
            />
          )}
          {this.state.confirmRemove && (
            <ConfirmDialog
              title={`Remove ${editEntry.entry.service}`}
              message="Are you sure you want to remove this entry?"
              onConfirm={() => this.removeEntry(editEntry.id)}
              onCancel={this.onCancel}
            />
          )}
        </div>
      </div>
    );
  }
}