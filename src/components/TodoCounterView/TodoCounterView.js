import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Typography from '@material-ui/core/Typography';

function TodoCounterView({ store }) {
  return (
    <div>
      <Typography>
        {store.pendingCount} pending, {store.completedCount} completed
      </Typography>
    </div>
  );
}

TodoCounterView.propTypes = {
  store: PropTypes.object.isRequired,
};

export default observer(TodoCounterView);
