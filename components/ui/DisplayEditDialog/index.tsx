import React, { useState } from "react";
import styles from './index.module.scss'


// material-ui
import { Button } from '@material-ui/core'
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// firebase
import { pushEditDiary } from "../../../firebase-config";

interface Props {
    isOpenEditDialog: boolean;
    handleClose: () => void;
    selectedId: string;
    beforeEditText: string;
}

const DisplayEditDialog: React.FC<Props> = ({
    isOpenEditDialog,
    handleClose,
    selectedId,
    beforeEditText,
}) => {
    { console.log(beforeEditText + 'がDisplayEditDialogに渡された') }
    const [diary, setDiary] = useState(beforeEditText);
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
                        minRows="3"
                        onChange={(e) => setDiary(e.target.value)}
                        value={diary}
                    />
                    <Button
                        classes={{ root: styles.button }}
                        fullWidth={true}
                        color={"primary"}
                        onClick={() => {
                            pushEditDiary({ selectedId, diary });
                            handleClose();
                            setDiary(beforeEditText)
                        }}
                    >
                        編集内容を保存
                    </Button>
                    <Button className={styles.button}>
                        TOPへ戻る
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DisplayEditDialog;
