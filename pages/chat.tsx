import Layout from "../components/Layout"
import Index from '../components/pages/chat/index'
import React from 'react'



// material-ui
import CssBaseline from '@material-ui/core/CssBaseline';

const IndexPage = () => (

    < Layout title="夜勤日誌アプリ" >
        <CssBaseline />
        <Index />
    </Layout >
);

export default IndexPage;
