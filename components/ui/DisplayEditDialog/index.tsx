import React, { useState } from 'react'

// material-ui
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { NamesAndDiariesRef } from "../../../firebase-config";

const useStyles = makeStyles({
    root: {
        width: "10rem",
        backgroundColor: "var(--c-gray-input)",
    },
    button: {
        display: "block",
        margin: "0 auto",
        width: "9rem",
        color: "white",
    },
    icon: {
        display: "inline-block",
        marginRight: "0.3rem",
    },
    text: {
        verticalAlign: "6px",
        display: "inline-block",
    },
});

interface Props {
    isOpenEditDialog: boolean;
    handleClose: () => void;
    selectedId: string;
    text: string;
}

const DisplayEditDialog: React.FC<Props> = ({ isOpenEditDialog, handleClose, selectedId, text }) => {
    const classes = useStyles();
    const [diary, setDiary] = useState('')

    return (
        <Dialog open={isOpenEditDialog} onClose={handleClose}>
            <DialogTitle>編集内容を入力</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="内容"
                    type="email"
                    fullWidth
                    variant="outlined"
                    multiline={true}
                    minRows='3'
                    onChange={(e) => setDiary(e.target.value)}
                />
            </DialogContent>
        </Dialog>
    );

}

export default DisplayEditDialog
