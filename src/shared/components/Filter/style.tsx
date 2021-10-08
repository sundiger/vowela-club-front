import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        filter: {
            margin: '10px',
            backgroundColor: 'white',
        },
        filterDate: {
            margin: '10px',
            backgroundColor: 'white',
            justifyContent: 'space-around',
        }
    }),
    { index: 1 }
);

export default useStyles
