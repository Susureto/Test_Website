
import {Alert} from '@mui/material';
import * as React from 'react';
import {message} from 'antd'

export default function Alerty() {
    const onFinish=(e) => {
        console.log(e)
        setTimeout(() => {
            message.warning('Traits Are Not Revealed Yet')
        }, 1000);
    }
    
    
    return (
        onFinish()
    )
}