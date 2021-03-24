import React from 'react';
import update from 'immutability-helper';
import { v4 } from 'uuid';
import EditEntry from './components/EditEntry';
import ViewEntries from './components/ViewEntries';
import ConfirmDialog from './components/ConfirmDialog';
import DataErrorAlert from './components/DataErrorAlert';
import HeaderEntry from './components/HeaderEntry'
import { EditorKit, EditorKitDelegate } from 'sn-editor-kit';
import DataImportEntry from './components/DataImportEntry';
import { importJSON } from './datatransformation/import/import';
import { canUpgrade, isValidFormat } from './datatransformation/verification/verification';
import { migrateFromV0 } from './datatransformation/migration/v0Migration';

const initialState = {
  filterText: '',
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
        debugger;
        if (text) {
          try {
            entries = JSON.parse(text);
            //If not a valid format and can not upgrade THEN we have a parse error
            if (!isValidFormat(entries) && canUpgrade(entries)) {
              entries = migrateFromV0(entries);
              // We need to write changes so we're not in an constant migration every single time
              // that client opens up app (assuming that rarely edit entries)
              this.saveNote(entries);
            } else if(!isValidFormat(entries)){
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
    //Currently we know the entry doesn't have a UUID
    //Let's generate one now for the entry
    entry['uuid'] = v4();
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

  editEntry = ({ uuid, entry }) => {
    this.setState(state => {
      let index = this.getIndexFromUUID(uuid, this.state.entries);
      const entries = update(state.entries, { [index]: { $set: entry } });
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

  onEdit = uuid => {
    this.setState(state => ({
      editMode: true,
      importMode: false,
      editEntry: {
        uuid,
        entry: this.getByUUID(uuid, this.state.entries)
      }
    }));
  };

  getByUUID = (uuid, entries) => {
    for(let i = 0; i < entries.length; i++){
      if(entries[i].uuid === uuid){
        return entries[i]
      }
    }
  }

  getIndexFromUUID = (uuid, entries) => {
    for(let i = 0; i < entries.length; i++){
      if(entries[i].uuid === uuid){
        return i;
      }
    }
    return -1;
  }

  onSearch = text => {
    this.setState(state => ({
      filterText: text
    }))
  }

  onUpdateSearch = text => {
    this.setState(state => ({
      filterText: text
    }))
  }

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

  onSave = ({ uuid, entry }) => {
    // If there's no ID it's a new note
    debugger;
    if (uuid != null) {
      this.editEntry({ uuid, entry });
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
        <HeaderEntry onAddNew={this.onAddNew} onUpdateSearch={(text) => this.onUpdateSearch(text)}/>
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
              uuid={editEntry.uuid}
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