import React, { useEffect, useState, VFC } from "react";
import styles from "./index.module.scss";
import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'
import { NamesAndDiariesRef } from "../../../firebase-config";

// material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//コンポーネント
import DiaryDialog from "../DiaryDialog/index";

type NameAndText = {
  name?: string;
  text?: string;
}


const DisplayNameAndDiary: VFC = () => {
  //　データベースからnameとtextを取得
  const [open, setOpen] = useState(false);
  const [Diaries, setDiaries] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [beforeEditText, setBeforeEditText] = useState("")



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
        setDiaries(NewNamesAndDiaries);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.ContentWrapper}>
      <div className={styles.content}>
        <CssBaseline />
        {Diaries.map(({ key, name, text, }) => {
          return (
            <Container maxWidth="sm" classes={{ root: styles.container }}>
              <Grid item xs={2}>
                <p>{name}様</p>
              </Grid>
              <Grid item xs={10}>
                <div className={styles.Wrapper}>
                  <p>{text}</p>
                  <Button>
                    <MoreVertIcon
                      className={styles.moreIcon}
                      onClick={() => {
                        handleClickOpen();
                        setSelectedId(key);
                        setBeforeEditText(text);
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
          beforeEditText={beforeEditText}
        />


      </div>
    </div>
  );
};

export default DisplayNameAndDiary;
