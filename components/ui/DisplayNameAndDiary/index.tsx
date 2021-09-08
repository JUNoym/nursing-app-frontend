import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { NamesAndDiariesRef } from "../../../firebase-config";

// material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//コンポーネント
import DiaryDialog from "../DiaryDialog/index";
import DisplayEditDialog from "../../../components/ui/DisplayEditDialog"


interface NameAndText {
  name?: string | null;
  text?: string | null;
}

const DisplayNameAndDiary = (props) => {
  //　データベースからnameとtextを取得
  const [open, setOpen] = useState(false);
  const [Diaries, setDiaries] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [isOpenEditDialog, setIsOpenEditDialog] = useState(false)


  useEffect(() => {
    NamesAndDiariesRef.orderByKey()
      .limitToLast(10)
      .on("value", (snapshot) => {
        const NamesAndDiaries = snapshot.val();
        if (NamesAndDiaries === null) {
          setDiaries([]);
          return;
        }
        const entries = Object.entries(NamesAndDiaries);
        const NewNamesAndDiaries = entries.map((entry) => {
          const key = entry[0];
          const nameAndText: NameAndText = entry[1];
          return { key: key, ...nameAndText };
        });
        setDiaries(entries);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.content}>
      <CssBaseline />

      {Diaries.map(({ key, name, text }) => {
        return (
          <Container maxWidth="sm" classes={{ root: styles.container }}>
            <Grid item xs={2}>
              <p>{name}</p>
            </Grid>
            <Grid item xs={10}>
              <div className={styles.Wrapper}>
                <p>{text}</p>
                <Button>
                  <MoreVertIcon
                    onClick={() => {
                      handleClickOpen();
                      setSelectedId(key);
                    }}
                  />
                </Button>
              </div>
            </Grid>
          </Container>
        );
      })}

      <DiaryDialog
        open={open}
        handleClose={handleClose}
        selectedId={selectedId}
      />

    </div>
  );
};

export default DisplayNameAndDiary;
