import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: theme.spacing(4),
    },
    text: {
      marginTop: theme.spacing(1),
    },
    textWrapper: {
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    submitBtn: {
      marginLeft: 'auto',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
  }),
  { index: 1 }
);
