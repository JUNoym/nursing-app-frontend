import React, { useState } from 'react'
import styles from './index.module.scss'

// material-ui
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// firebase
import { NamesAndDiariesRef } from "../../../firebase-config";
import { pushEditDiary } from '../../../firebase-config'



interface Props {
    isOpenEditDialog: boolean;
    handleClose: () => void;
    selectedId: string;
    setDiary: () => void
    diary: string
}

const updateDiary = (diary) => {
    console.log(`${diary}を保存`)

}

const DisplayEditDialog: React.FC<Props> = ({ isOpenEditDialog, handleClose, selectedId, }) => {
    const [diary, setDiary] = useState('')

    return (
        <div className={styles.content}>
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
                        onChange={(e) => setDiary(diary)}
                    // value={diary}
                    />
                    {console.log(diary)}
                    <div className={styles.buttonWrapper}>
                        <Button
                            classes={{ root: styles.button }}
                            fullWidth={true}
                            color={'primary'}
                            onClick={() => {
                                updateDiary(diary)
                                handleClose()
                                pushEditDiary({ selectedId, diary })
                                setDiary('')
                            }}
                        >
                            編集内容を保存
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div >
    );

}

export default DisplayEditDialog
