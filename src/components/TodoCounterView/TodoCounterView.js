import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

function TodoCounterView({ store }) {
  return (
    <div>
      {store.pendingCount} pending, {store.completedCount} completed
    </div>
  );
}

TodoCounterView.propTypes = {
  store: PropTypes.object.isRequired,
};

export default observer(TodoCounterView);
