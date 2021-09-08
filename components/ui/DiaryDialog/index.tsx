import React, { ReactNode, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

import { NamesAndDiariesRef } from "../../../firebase-config";

// コンポーネント
import DisplayEditDialog from "../../../components/ui/DisplayEditDialog"
import Edit from "@material-ui/icons/Edit";

interface Props {
  childrem?: Element | ReactNode;
  open: boolean;
  handleClose: () => void;
  selectedId: string;
}

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

const DiaryDialog: React.FC<Props> = ({ open, handleClose, selectedId, }) => {
  const classes = useStyles();
  // const [diary, setDiary] = useState('')
  const Delete = (selectedId) => {
    NamesAndDiariesRef.child(selectedId).remove();
  };

  const [isOpenEditDialog, setIsOpenEditDialog] = useState(false)


  const handleClickOpen = () => {
    setIsOpenEditDialog(true)
  }

  const handleEditClose = () => {
    setIsOpenEditDialog(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.root}>
          <div>
            <Button
              className={classes.button}
              onClick={() => {
                handleClose();
                //ボタンを押したらtrueになる
                handleClickOpen()
              }
              }
            >
              <EditIcon className={classes.icon} />
              <span className={classes.text}>編集</span>
            </Button>
          </div>
          <div>
            <Button
              className={classes.button}
              onClick={() => {
                handleClose();
                Delete(selectedId);
              }}
            >
              <DeleteIcon className={classes.icon} />
              <span className={classes.text}>削除</span>
            </Button>
          </div>
        </div>

      </Dialog>
      <DisplayEditDialog
        isOpenEditDialog={isOpenEditDialog}
        selectedId={selectedId}
        handleClose={handleEditClose}
      // setDiary={setDiary}
      // diary={diary}
      />

    </div>
  );
};

export default DiaryDialog;
