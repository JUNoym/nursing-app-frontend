import React, { ReactNode, useState } from 'react'
import styles from './index.module.scss'


// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

interface Props {
    children?: ReactNode
}

const MainComponents = (props: Props) => {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="md" classes={{ root: styles.container }}>
                <Box
                    sx={{
                        bgcolor: '#000',
                        height: '90vh',
                    }}
                />
            </Container>
        </div >
    )
}

export default MainComponents
