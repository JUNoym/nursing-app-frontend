import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

import { NamesAndDiariesRef } from "../../../firebase-config";

interface Props {
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

const Delete = (selectedId) => {
  console.log("削除した");
  NamesAndDiariesRef.child(selectedId).remove();
};

const DiaryDialog: React.FC<Props> = ({ open, handleClose, selectedId }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={classes.root}>
        <div>
          <Button className={classes.button}>
            <EditIcon onClick={handleClose} className={classes.icon} />
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
  );
};

export default DiaryDialog;
