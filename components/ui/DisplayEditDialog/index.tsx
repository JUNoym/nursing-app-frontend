import React, { useState } from "react";
import styles from "./index.module.scss";

// material-ui
import Button from "@material-ui/core/Button";
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
    const [diary, setDiary] = useState('初期値');
    { console.log(beforeEditText + 'がDiaryDialogに渡された') }
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
                    <div className={styles.buttonWrapper}>
                        <Button
                            classes={{ root: styles.button }}
                            fullWidth={true}
                            color={"primary"}
                            onClick={() => {
                                pushEditDiary({ selectedId, diary });
                                handleClose();
                                // setDiary('ボタンを押して更新されてたよ');
                                // ↑これ消したら治った
                            }}
                        >
                            編集内容を保存
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DisplayEditDialog;
