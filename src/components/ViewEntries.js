import React from 'react';
import AuthEntry from './AuthEntry';

const ViewEntries = ({ entries, onEdit, onRemove }) => (
  <div className="auth-list">
    {entries.map((entry) => (
      <AuthEntry
        key={entry.uuid}
        id={entry.uuid}
        entry={entry}
        onEdit={onEdit}
        onRemove={onRemove}
      />
    ))}
  </div>
);

export default ViewEntries;
