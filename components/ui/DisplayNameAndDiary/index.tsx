import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { NamesAndDiariesRef } from '../../../firebase-config'

// material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MoreVertIcon from "@material-ui/icons/MoreVert";


//コンポーネント
import DiaryDialog from "../DiaryDialog/index";


const DisplayNameAndDiary = (props) => {
  //　データベースからnameとtextを取得
  const [open, setOpen] = useState(false);
  const [Diaries, setDiaries] = useState([]);

  useEffect(() => {
    NamesAndDiariesRef.orderByKey().limitToLast(10).on('value', (snapshot) => {
      const NamesAndDiaries = snapshot.val()
      if (NamesAndDiaries === null) return
      const entries = Object.entries(NamesAndDiaries)
      const NewNamesAndDiaries = entries.map((entry) => {
        const key = entry[0]
        const nameAndText = entry[1]
        return { key: key, ...nameAndText }
      })
      setDiaries(NewNamesAndDiaries)
    })
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getKey = () => {
    console.log("ここで削除対象のキーを取得")
  };
  return (
    <div className={styles.content}>
      <CssBaseline />

      {
        Diaries.map(({ key, name, text }) => {
          return (
            <Container maxWidth="sm" classes={{ root: styles.container }}>
              <Grid item xs={2}>
                <p>{name}</p>
              </Grid>
              <Grid item xs={10}>
                <div className={styles.Wrapper}>
                  <p>{text}</p>
                  <p>{key}</p>
                  <Button>
                    <MoreVertIcon
                      onClick={() => {
                        handleClickOpen()
                        getKey()
                      }}
                    />
                  </Button>
                </div>
              </Grid>
            </Container>
          )
        })
      }


      <DiaryDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default DisplayNameAndDiary;