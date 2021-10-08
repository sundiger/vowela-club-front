import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@material-ui/core';

export const PricingModal = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button fullWidth variant="outlined" color="primary" onClick={handleClickOpen}>
                Купить
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Спасибо за проявленный интерес!"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                         На данный момент идет разработка данного функционала.
                        Подключайтесь к сообществу VowelA и следите за новостями на нашем канале "Tres Comas Club" в дискорде! Мы очень рады что вы с нами!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Понятно
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
