import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function Error() {

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

  return (
    <Snackbar open={true} autoHideDuration={6000} onClose={true}>
            <Alert onClose={true} severity="error">Hola Gente</Alert>
      </Snackbar>
  );
}