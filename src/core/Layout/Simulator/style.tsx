import SettingsStore from "../../../shared/stores/settingsStore";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rate: {
            display: 'flex',
                flexWrap: 'wrap',
                '& > *': {
                margin: theme.spacing(1),
                    padding: theme.spacing(1),
            },
        },
        priceStyle: {
            '& > *': {
                margin: theme.spacing(4),
            },
        },
        margin: {
            margin: theme.spacing(1),
        },
        sliderCard1: {
            width: '100%',
                margin: theme.spacing(1),
                color: SettingsStore.isDarkTheme ? '#e33371' : 'light'
        },
        textFieldCard1: {
            '& label.Mui-focused': {
                color: SettingsStore.isDarkTheme ? '#e33371' : 'light',
            },
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: SettingsStore.isDarkTheme ? '#e33371' : 'light',
                },
            },
        },

    }),
    { index: 1 }
);

export default useStyles
