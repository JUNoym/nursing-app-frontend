import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  open: boolean;
  handleClose: () => void;
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

const DiaryDialog: React.FC<Props> = ({ open, handleClose }) => {
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
          <Button className={classes.button}>
            <DeleteIcon onClick={handleClose} className={classes.icon} />
            <span className={classes.text}>削除</span>
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default DiaryDialog;
