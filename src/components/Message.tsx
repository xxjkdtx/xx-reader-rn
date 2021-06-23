import React from 'react';
import { Snackbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { ISnackState } from '../store/types';

export default () => {
  const { snackMessage, snackVisible } = useSelector((state: ISnackState) => {
    return {
      snackMessage: state.message,
      snackVisible: state.show,
    };
  });

  const dispatch = useDispatch();
  const onSnackDismiss = () => {
    dispatch({ type: 'HIDE_SNACK' });
  };

  return (
    <Snackbar visible={snackVisible} onDismiss={onSnackDismiss}>
      {snackMessage}
    </Snackbar>
  );
};
