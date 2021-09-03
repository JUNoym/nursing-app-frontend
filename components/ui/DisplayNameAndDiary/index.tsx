import React from 'react'
import styles from './index.module.scss'

// material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import MoreVertIcon from '@material-ui/icons/MoreVert'


const DisplayNameAndDiary = (props) => {
    const { name, text } = props
    return (
        <div className={styles.content}>
            <CssBaseline />
            <Container maxWidth="sm" classes={{ root: styles.container }}>
                <Grid item xs={2}>
                    <p>{name}</p>
                </Grid>
                <Grid item xs={10}>
                    <div className={styles.Wrapper}>
                        <p>{text}</p>
                        <Button>
                            <MoreVertIcon />
                        </Button>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}


export default DisplayNameAndDiary
