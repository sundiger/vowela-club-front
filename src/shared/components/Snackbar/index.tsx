import React from 'react';
import { observer } from 'mobx-react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import snackbarStore from './store';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const CustomizedSnackbars = observer(() => {
    const handleCloseSnack = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        snackbarStore.hide();
    };

    return (
        <Snackbar
            open={snackbarStore.open}
            autoHideDuration={3000}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            onClose={handleCloseSnack}
        >
            <Alert onClose={handleCloseSnack} severity={snackbarStore.color}>
                {snackbarStore.text}
            </Alert>
        </Snackbar>
    );
});
