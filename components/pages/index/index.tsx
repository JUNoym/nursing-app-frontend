import React from 'react'
import styles from './index.module.scss'
import { styled } from '@material-ui/core/styles';

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(0.1),
    textAlign: "center",
}));


const Index = () => {
    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="md" classes={{ root: styles.container }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>

                            <h1>名前</h1>

                        </Grid>
                        <Grid item xs={9}>

                            <h1>日誌</h1>

                        </Grid>
                        <Grid item xs={1}>

                            <h1>ボタン</h1>

                        </Grid>
                        <Grid item xs={2}>
                            <Item>
                                <p>名前が表示される</p>
                            </Item>
                        </Grid>
                        <Grid item xs={10}>
                            <Item>
                                <div className={styles.Wrapper}>
                                    <p>利用者の活動内容がここに表示される</p>
                                    <Button variant="text" classes={{ root: styles.ButtonEdit }}>
                                        <MoreVertIcon fontSize='large' />
                                    </Button>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

                <div className={styles.form}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <p>入力</p>
                            </Grid>

                            <Grid item xs={12}>

                                <TextField
                                    classes={{ root: styles.text }}
                                    // fullWidth
                                    required
                                    label="名前"
                                    placeholder="名前を入力"
                                    margin="normal"
                                    variant="filled"
                                    id="outlined-name"
                                />
                                <TextField
                                    classes={{ root: styles.text }}
                                    fullWidth
                                    required
                                    label="利用者の様子"
                                    placeholder="利用者の様子を記録"
                                    margin="normal"
                                    variant="filled"
                                    id="outlined-name"
                                    multiline="true"
                                />

                            </Grid>

                        </Grid>
                    </Box>
                    <div className={styles.ButtonWrapper}>
                        <Button variant="contained" classes={{ root: styles.Button }}>
                            利用者を追加
                        </Button>
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default Index
